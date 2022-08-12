// index.js //

// imports 
const electron = require('electron')
const pdf = require('html-pdf');
const path = require('path');
const PDFObject = require('pdfobject')
const fs = require('fs')

const chordprotools = require('./chordprotools')
const chordpro = require('./chordpro')

// global state
const WINDOW = electron.remote.getCurrentWindow()
var editor = null

// functions
function process() {
  // var chordSheet = document.getElementById("input_code").innerHTML
  var chordSheet = editor.getValue()
  chordSheet = chordSheet.replace(/\r\n/g, '\n')
  res = chordpro.parse(chordSheet)
  var song = res.value;

  var steps = document.getElementById('steps').value;
  var resolvb = !document.getElementById('withsharp').checked;
  var up = true;
  if (steps < 0) {
    up = false;
    steps *= -1;
  }
  for (var i = 0; i < steps; ++i) song = chordpro.transpose(song, up, resolvb);

  const html = chordprotools.make_html(song)

  console.log(song)


  fs.readdir(".", (err, files) => {
    files.forEach(file => {
      if (file.endsWith(".pdf")) {
        fs.unlink(file, (err) => {
          console.log('*.pdf was deleted');
        });
      }
    });
  });


  var name = document.getElementById('songtitle').value

  if (name == "")
    name = "tmp.pdf"
  else 
    name += ".pdf"

  make_pdf(html[0], name, function() {
    PDFObject.embed(name, '#sheetview');
  });


  return html
}

function make_pdf(html, fn, then) {
  var options2 = {
    format: "A4",
    border: ".1in"
  }; 
  pdf.create(html, options2).toFile(fn, function(err, res) {
    then();
  });
}

function open_file() {
  let options = {
    title: 'Open ChordPro file...',
    defaultPath: 'D:\\Nextcloud\\Noten\\',
    filters: [
      {name: 'ChordPro File', extensions: ['chopro']},
      {name: 'All Files', extensions: ['*']}
    ],
    properties: ['openFile', 'multiSelections']
  }

  var fn = electron.remote.dialog.showOpenDialogSync(WINDOW, options)
  var tmp = fn.toString().split('\\')
  var name = tmp[tmp.length - 1].split('.chopro')[0]

  var sheet = fs.readFileSync(fn.toString(), 'utf8');
  // document.getElementById("input_code").innerHTML = sheet
  editor.setValue(sheet)
  document.getElementById('songtitle').value = name
}

function save_file() {
  let options = {
    title: 'Save ChordPro file...',
    defaultPath: '' +
        document.getElementById('songtitle').value + '.chopro',
    filters: [
      {name: 'ChordPro File', extensions: ['chopro']},
      {name: 'All Files', extensions: ['*']}
    ],
    properties: ['openFile', 'multiSelections']
  }

  var fn = electron.remote.dialog.showSaveDialogSync(WINDOW, options)
  fs.writeFile(
      fn.toString(), document.getElementById('input_code').innerHTML,
      function(err) {});
}

// MONACO Editor //
const amdLoader = require('monaco-editor/min/vs/loader');
const amdRequire = amdLoader.require;
const amdDefine = amdLoader.require.define;

function uriFromPath(_path) {
  var pathName = path.resolve(_path).replace(/\\/g, '/');
  if (pathName.length > 0 && pathName.charAt(0) !== '/') {
    pathName = '/' + pathName;
  }
  return encodeURI('file://' + pathName);
}

amdRequire.config({
  baseUrl: uriFromPath(path.join(__dirname, './node_modules/monaco-editor/min'))
});

// workaround monaco-css not understanding the environment
// self.module = undefined;
amdRequire(['vs/editor/editor.main'], function() {
  monaco.languages.register({id: 'chordpro'});

  // Register a tokens provider for the language
  monaco.languages.setMonarchTokensProvider(
      'chordpro', {tokenizer: chordpro.monaco_tokenizer()});

  // Define a new theme that contains only rules that match this language
  monaco.editor.defineTheme('chordprotheme', {
    base: 'vs',
    inherit: false,
    rules: [
      {token: 'cp-directive', foreground: '00b0e8', fontStyle: 'bold'},
      {token: 'cp-comment', foreground: '008000', fontStyle: 'italic'},
      {token: 'cp-chord', foreground: 'FF0000'},
      {token: 'cp-meta', foreground: 'a31515'},
    ]
  });

  // Register a completion item provider for the new language
  monaco.languages.registerCompletionItemProvider('chordpro', {
    provideCompletionItems: () => {
      var suggestions = chordpro.monaco_suggestions();
      return {suggestions: suggestions};
    }
  });


  editor = monaco.editor.create(
      document.getElementById('code'),
      {value: '', language: 'chordpro', theme: 'chordprotheme'});
  window.onresize = function() {
    editor.layout()
  }
});