// chordpro.js //

function monaco_tokenizer() {
  return {
    root: [
      [/{c[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-comment'],
      [/{comment[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-comment'],

      // todo: own color
      [/{ns[ ]*}/, 'cp-directive'],
      [/{new_song[ ]*}/, 'cp-directive'],
      [/{np[ ]*}/, 'cp-directive'],
      [/{new_page[ ]*}/, 'cp-directive'],
      [/{npp[ ]*}/, 'cp-directive'],
      [/{new_physical_page[ ]*}/, 'cp-directive'],
      [/{column_break[ ]*}/, 'cp-directive'],
      [/{cb[ ]*}/, 'cp-directive'],

      [/{chorus[ ]*}/, 'cp-directive'],
      [/{chorus[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{start_of_verse[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{sov[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{start_of_chorus[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{soc[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{end_of_chorus[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{eoc[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{start_of_bridge[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{sob[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{end_of_bridge[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{eob[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{start_of_tab[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{sot[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{end_of_tab[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{eot[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{start_of_grid[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{sog[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{end_of_grid[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{eog[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{end_of_verse[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],
      [/{eov[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-directive'],

      [/\[[A-Za-z\(\)0-9#+]*\]/, 'cp-chord'],
      [/{define[ ]*[ a-zA-Z0-9?!,]*:}/, 'cp-chord'],
      [/{chord[ ]*[ a-zA-Z0-9?!,]*:}/, 'cp-chord'],

      [/{title[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{t[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{subtitle[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{st[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{sorttitle[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{artist[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{composer[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{album[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{lyricist[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{copyright[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{year[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{key[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{time[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{tempo[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{duration[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{capo[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
      [/{meta[ ]*:[ a-zA-Z0-9?!,]*}/, 'cp-meta'],
    ]
  }
}

function monaco_suggestions() {
  return [
    {
      label: 'comment',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{comment: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'sov (exhaustive)',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: [
        '{start_of_verse: ${1:name} }', '${2:body}',
        '{end_of_verse: ${1:name} }'
      ].join('\n'),
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'sov',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{start_of_verse: ${1:name} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'eov',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{end_of_verse: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'sot (exhaustive)',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: [
        '{start_of_tab: ${1:name} }', '${2:body}', '{end_of_tab: ${1:name} }'
      ].join('\n'),
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'sot',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{start_of_tab: ${1:name} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'eot',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{end_of_tab: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'soc (exhaustive)',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: [
        '{start_of_chorus: ${1:name} }', '${2:body}',
        '{end_of_chorus: ${1:name} }'
      ].join('\n'),
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'soc',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{start_of_chorus: ${1:name} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'eoc',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{end_of_chorus: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'sob (exhaustive)',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: [
        '{start_of_bridge: ${1:name} }', '${2:body}',
        '{end_of_bridge: ${1:name} }'
      ].join('\n'),
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'sob',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{start_of_bridge: ${1:name} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'eob',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{end_of_bridge: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'title',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{title: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'subtitle',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{subtitle: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'artist',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{artist: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'album',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{album: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'chorus',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{chorus: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'composer',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{composer: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'lyricist',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: '{lyricist: ${1:condition} }',
      insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
  ]
}

class Directive {}

class ChorusDirective extends Directive {
  constructor(title) {
    super();
    this.title = title
  }
}

class BlockDirective extends Directive {
  constructor(title, cnt) {
    super();
    this.title = title;
    this.cnt = cnt
  }
}

class VerseDirective extends BlockDirective {}
class ChorusBlockDirective extends BlockDirective {}
class BridgeDirective extends BlockDirective {}
class TabDirective extends BlockDirective {}
class GridDirective extends BlockDirective {}

class Line {}
class TextLine extends Line {
  constructor(text) {
    super();
    this.text = text
  }
}
class CTextLine extends Line {
  constructor(chord, text) {
    super();
    chord = chord.toString();
    while (chord.endsWith(' ') || chord.endsWith(']') || chord.endsWith(',')) {
      chord = chord.substr(0, chord.length - 2);
    }
    this.chord = chord;
    this.text = text
  }
}

class MetaDirective extends Directive {
  constructor(body) {
    super();
    this.body = body
  }
}

class TitleDirective extends MetaDirective {}
class SubtitleDirective extends MetaDirective {}
class SorttitleDirective extends MetaDirective {}
class ArtistDirective extends MetaDirective {}
class ComposerDirective extends MetaDirective {}
class AlbumDirective extends MetaDirective {}
class LyricistDirective extends MetaDirective {}
class CopyrightDirective extends MetaDirective {}
class YearDirective extends MetaDirective {}
class TempoDirective extends MetaDirective {}
class DurationDirective extends MetaDirective {}
class CapoDirective extends MetaDirective {}
class KeyDirective extends MetaDirective {}
class TimeDirective extends MetaDirective {}

class FormatDirective extends Directive {}
class NewSongDirective extends FormatDirective {}
class NewPageDirective extends FormatDirective {}
class NewPhysicalPageDirective extends FormatDirective {}
class ColumnBreakDirective extends FormatDirective {}

class CommentDirective extends Directive {
  constructor(comment) {
    super();
    this.comment = comment
  }
}

class ChordDirective extends Directive {
  constructor(chord) {
    super();
    this.chord = chord
  }
}

class DefineDirective extends ChordDirective {}
class ChordInDirective extends ChordDirective {}

class Song {
  constructor(body) {
    this.body = body
  }
}

const {dir} = require('console')
const {stream, N, C, X, F} = require('parser-combinator');
const util = require('util')

function parse(code) {
  const puretext = new X({
    spacesCharacters: ' \n',
    wordSeparators: C.charIn(' [{\n'),
    letter: F.not(C.charIn('[{}]\n')).rep(),
    moreSeparators: null
  })

  const ws = function(parser) {
    return F.try(C.charIn(' ').rep().drop().then(parser)).or(parser)
  };
  const opt = function(t, n) {
    return F.try(t.then(n)).or(n)
  };
  const nl =
      function(parser) {
    return F.try(C.charIn(' \r\n').rep().drop().then(parser)).or(parser)
  }

  const lyrics =
      puretext.wordsUntil(C.charIn('{[\n')).map(x => new TextLine(x));

  const chordlyrics =
      F.try(C.charIn('[')
                .drop()
                .then(puretext.wordsUntil(C.charIn(']'))
                          .then(C.charIn(']').then(
                              F.try(puretext.wordsUntil(C.charIn('{[\n'))))))
                .map(x => new CTextLine(x[0], x[2].trim())))
          .or(C.charIn('[')
                  .drop()
                  .then(puretext.wordsUntil(C.charIn(']')).then(C.charIn(']')))
                  .map(x => new CTextLine(x, '')))

  const lyricsline =
      ws(F.try(chordlyrics).or(lyrics).rep())
          .then(F.try(C.charIn(' ').then(C.charIn(' \n').rep().drop()))
                    .or(C.charIn(' \n').rep().drop()))
          .map(x => x)

  const abstractblockdirective = function(shortb, longb, shorte, longe, fun) {
    return ws(C.charIn('{').drop().then(ws(F.sequence(
        F.try(C.string(shortb)).or(C.string(longb)).drop(),
        ws(C.charIn(':')).drop(), ws(puretext.wordsUntil('}')),
        C.charIn('}').drop().then(
            F.try(C.charIn(' \n').rep()).or(C.charIn('\n')).drop()),
        fun.rep(), C.charIn('{').drop(),
        ws(F.try(C.string(shorte)).or(C.string(longe))).drop(),
        ws(C.charIn(':')).drop(), ws(puretext.wordsUntil('}')).drop(),
        C.charIn('}').drop().then(
            F.try(C.charIn(' \n').rep()).or(C.charIn('\n')).drop())))))
  };
  const abstractblockdirective_ = function(shortb, longb, shorte, longe, fun) {
    return ws(C.charIn('{').drop().then(ws(F.sequence(
        F.try(C.string(shortb)).or(C.string(longb)).drop(),
        ws(C.charIn(':')).drop(), ws(puretext.wordsUntil('}')),
        C.charIn('}').drop().then(
            F.try(C.charIn(' \n').rep()).or(C.charIn('\n')).drop()),
        fun, C.charIn('{').drop(),
        ws(F.try(C.string(shorte)).or(C.string(longe))).drop(),
        ws(C.charIn(':')).drop(), ws(puretext.wordsUntil('}')).drop(),
        C.charIn('}').drop().then(
            F.try(C.charIn(' \n').rep()).or(C.charIn('\n')).drop())))))
  };

  const versedirective =
      abstractblockdirective(
          'sov', 'start_of_verse', 'eov', 'end_of_verse', lyricsline)
          .map(x => new VerseDirective(x[0], x[1]));

  const chorusblockdirective =
      abstractblockdirective(
          'soc', 'start_of_chorus', 'eoc', 'end_of_chorus', lyricsline)
          .map(x => new ChorusBlockDirective(x[0], x[1]));

  const bridgedirective =
      abstractblockdirective(
          'sob', 'start_of_bridge', 'eob', 'end_of_bridge', lyricsline)
          .map(x => new BridgeDirective(x[0], x[1]));

  const tabdirective =
      abstractblockdirective_(
          'sot', 'start_of_tab', 'eot', 'end_of_tab', puretext.wordsUntil('{'))
          .map(x => new TabDirective(x[0], x[1]));

  const griddirective = abstractblockdirective_(
                            'sog', 'start_of_grid', 'eog', 'end_of_grid',
                            puretext.wordsUntil('{'))
                            .map(x => new GridDirective(x[0], x[1]));

  const blockdirective =
      F.try(versedirective)
          .or(F.try(chorusblockdirective)
                  .or(F.try(bridgedirective)
                          .or(F.try(tabdirective).or(griddirective))));

  const abstractformatdirective = function(short, long) {
    return ws(C.charIn('{').drop().then(ws(F.sequence(
        F.try(C.string(short)).or(C.string(long)).drop(),
        ws(C.charIn('}')
               .drop()
               .then(F.try(C.charIn(' \n').rep()).or(C.charIn('\n')))
               .drop())))))
  };

  const newsongdirective =
      abstractformatdirective('ns', 'new_song').map(x => new NewSongDirective())
  const newpagedirective =
      abstractformatdirective('np', 'new_page').map(x => new NewPageDirective())
  const newphysicalpagedirective =
      abstractformatdirective('npp', 'new_physical_page')
          .map(x => new NewPhysicalPageDirective())
  const columnbreakdirective = abstractformatdirective('cb', 'column_break')
                                   .map(x => new ColumnBreakDirective())

  const formatdirective = ws(F.try(newsongdirective)
                                 .or(F.try(newpagedirective)
                                         .or(F.try(newphysicalpagedirective)
                                                 .or(columnbreakdirective))))

  const abstractmetadirective1 =
      function(long) {
    return ws(C.charIn('{').drop().then(ws(F.sequence(
        C.string(long).drop(),
        ws(C.charIn(':')).drop(),
        ws(puretext.wordsUntil('}')),
        C.charIn('}').drop().then(
            F.try(C.charIn(' \n').rep()).or(C.charIn('\n')).drop()),
        ))))
  }

  const abstractmetadirective2 =
      function(short, long) {
    return ws(C.charIn('{').drop().then(ws(F.sequence(
        F.try(C.string(short)).or(C.string(long)).drop(),
        ws(C.charIn(':')).drop(),
        ws(puretext.wordsUntil('}')),
        C.charIn('}').drop().then(
            F.try(C.charIn(' \n').rep()).or(C.charIn('\n')).drop()),
        ))))
  }

  const titledirective =
      abstractmetadirective2('title', 't').map(x => new TitleDirective(x))
  const subtitledirective = abstractmetadirective2('st', 'subtitle')
                                .map(x => new SubtitleDirective(x))

  const sorttitledirective =
      abstractmetadirective1('sorttitle').map(x => new SorttitleDirective(x))
  const artistdirective =
      abstractmetadirective1('artist').map(x => new ArtistDirective(x))
  const composerdirective =
      abstractmetadirective1('composer').map(x => new ComposerDirective(x))
  const albumdirective =
      abstractmetadirective1('album').map(x => new AlbumDirective(x))
  const lyricistdirective =
      abstractmetadirective1('lyricist').map(x => new LyricistDirective(x))
  const copyrightdirective =
      abstractmetadirective1('copyright').map(x => new CopyrightDirective(x))
  const yeardirective =
      abstractmetadirective1('year').map(x => new YearDirective(x))
  const tempodirective =
      abstractmetadirective1('tempo').map(x => new TempoDirective(x))
  const durationdirective =
      abstractmetadirective1('duration').map(x => new DurationDirective(x))
  const capodirective =
      abstractmetadirective1('capo').map(x => new CapoDirective(x))
  const keydirective =
      abstractmetadirective1('key').map(x => new KeyDirective(x))
  const timedirective =
      abstractmetadirective1('time').map(x => new TimeDirective(x))
  const metametadirective =
      abstractmetadirective1('meta').map(x => new MetaDirective(x))

  const metadirective =
      F.try(titledirective)
          .or(F.try(subtitledirective)
                  .or(F.try(sorttitledirective)
                          .or(F.try(artistdirective)
                                  .or(F.try(composerdirective)
                                          .or(F.try(albumdirective)
                                                  .or(F.try(lyricistdirective)
                                                          .or(F.try(
                                                                   copyrightdirective)
                                                                  .or(F.try(
                                                                           yeardirective)
                                                                          .or(F.try(
                                                                                   tempodirective)
                                                                                  .or(F.try(
                                                                                           durationdirective)
                                                                                          .or(F.try(
                                                                                                   capodirective)
                                                                                                  .or(F.try(
                                                                                                           keydirective)
                                                                                                          .or(F.try(
                                                                                                                   timedirective)
                                                                                                                  .or(metametadirective))))))))))))))

  const chorusdirective =
      F.try(ws(C.charIn('{').drop().then(ws(F.sequence(
                   C.string('chorus').drop(),
                   ws(C.charIn('}')
                          .drop()
                          .then(F.try(C.charIn(' \n').rep()).or(C.charIn('\n')))
                          .drop())))))
                .map(new ChorusDirective(null)))
          .or(abstractmetadirective1('chorus').map(x => new ChorusDirective(x)))

  const commentdirective =
      abstractmetadirective1('chorus').map(x => new CommentDirective(x))

  const chorddefine =
      abstractmetadirective1('define').map(x => new DefineDirective(x))
  const chordchord =
      abstractmetadirective1('chord').map(x => new ChordInDirective(x))

  const directive =
      F.try(formatdirective)
          .or(F.try(commentdirective)
                  .or(F.try(chordchord)
                          .or(F.try(chorddefine)
                                  .or(F.try(metadirective)
                                          .or(F.try(chorusdirective)
                                                  .or(blockdirective))))))

  const song = nl(directive).rep().map(x => new Song(x))

  const parsing = song.parse(stream.ofString(code));

  console.log(util.inspect(parsing, {showHidden: false, depth: null}));

  return parsing
}

function toKeyNum(base_tone) {
  if (base_tone == 'C') return 0;
  if (base_tone == 'D') return 2;
  if (base_tone == 'E') return 4;
  if (base_tone == 'F') return 5;
  if (base_tone == 'G') return 7;
  if (base_tone == 'A') return 9;
  if (base_tone == 'B') return 11;
}

function fromKeyNum(num, resolveb) {
  switch (num) {
    case 0:
      return 'C';
    case 1:
      return resolveb ? 'Db' : 'C#';
    case 2:
      return 'D';
    case 3:
      return resolveb ? 'Eb' : 'D#';
    case 4:
      return 'E';
    case 5:
      return 'F';
    case 6:
      return resolveb ? 'Gb' : 'F#';
    case 7:
      return 'G';
    case 8:
      return resolveb ? 'Ab' : 'G#';
    case 9:
      return 'A';
    case 10:
      return resolveb ? 'Bb' : 'A#';
    case 11:
      return 'B';
  }
}

function transposeChord(chordstr, up, resolveb) {
  var main_tone = chordstr.substr(0, 1);
  var add = chordstr.substr(1, 1);


  var base = toKeyNum(main_tone);
  base += up ? 1 : -1;
  var start = 1;
  if (add == '#') {
    base = base + 1;
    start++;
  } else if (add == 'b') {
    base = base - 1;
    start++;
  }

  base = base % 12;

  var rest = chordstr.substr(start, chordstr.length - 1)
  return fromKeyNum(base, resolveb) + rest;
}

function transposeBlock(drv, up, resolveb) {
  if (drv instanceof TabDirective) {
    return block  // TODO:
  } else if (drv instanceof GridDirective) {
    return block  // TODO:
  }

  for (var i = 0; i < drv.cnt.value.length; ++i) {
    var line = drv.cnt.value[i];
    for (var j = 0; j < line.value.length; ++j) {
      textline = line.value[j];
      if (textline instanceof CTextLine) {
        textline.chord = transposeChord(textline.chord, up, resolveb);
        line.value[j] = textline
      }
    }
    drv.cnt.value[i] = line
  }

  return drv
}

function transpose(song, up, resolveb) {
  for (var i = 0; i < song.body.value.length; ++i) {
    var directive = song.body.value[i];
    if (directive instanceof BlockDirective) {
      song.body.value[i] = transposeBlock(directive, up, resolveb)
    }
  }
  return song;
}

function metadata(song, TYP) {
  for (i = 0; i < song.body.value.length; ++i) {
    var directive = song.body.value[i];
    if (directive instanceof TYP) {
      return directive.body;
    }
  }
  return '';
}

function block(drv) {
  output = `<div class="paragraph">`
  if (drv instanceof VerseDirective) {
    output += `<table class="row"><tbody><tr><td class="comment">` + drv.title +
        `</td></tr></tbody></table>`;
  }
  else if (drv instanceof ChorusBlockDirective) {
    output += `<table class="row"><tbody><tr><td class="comment">` + drv.title +
        `</td></tr></tbody></table>`;
  }
  else if (drv instanceof BridgeDirective) {
    output += `<table class="row"><tbody><tr><td class="comment">` + drv.title +
        `</td></tr></tbody></table>`;
  }
  else if (drv instanceof TabDirective) {
    return ''
  }
  else if (drv instanceof GridDirective) {
    return ''
  }

  for (var i = 0; i < drv.cnt.value.length; ++i) {
    var line = drv.cnt.value[i];
    output += `<table class='row'><tbody>`
    upper = `<tr>`
    lower = `<tr>`
    for (var j = 0; j < line.value.length; ++j) {
      textline = line.value[j];
      if (textline instanceof CTextLine) {
        upper += `<td class="chord">` + textline.chord + `</td>`;
        lower += `<td class='lyrics'>` + textline.text + `</td>`;
      } else {
        upper += `<td class="chord"></td>`;
        lower += `<td class='lyrics'>` + textline.text + `</td>`;
      }
    }

    upper += '</tr>'
    lower += '</tr>'

    output += upper + lower + `</tbody></table>`
  }

  return output += '</div>'
}

function addIfHas(song, TYP, label) {
  var res = metadata(song, TYP);
  if (res != '')
    return `<tr>
    <td class="left"><b>` +
        label + `</b></td>
    <td>` +
        res + `</td>
    </tr>`;
  return '';
}

function compile(song) {
  output = ``

  output += `<h1>` + metadata(song, TitleDirective) + `</h1>`;
  output += `<h2>` + metadata(song, SubtitleDirective) + `</h2>`;
  output += `<table class="center">`
  output += addIfHas(song, ArtistDirective, 'Artist');
  output += addIfHas(song, ComposerDirective, 'Composer');
  output += `</table>`

  for (var i = 0; i < song.body.value.length; ++i) {
    var directive = song.body.value[i];
    if (directive instanceof BlockDirective) {
      output += block(directive);
    } else if (directive instanceof FormatDirective) {
      if (directive instanceof NewPageDirective ||
          directive instanceof NewPhysicalPageDirective)
        output += `<div style="page-break-before:always">&nbsp;</div> `
    }
  }

  return output
}

module.exports = {
  monaco_tokenizer,
  monaco_suggestions,
  parse,
  transpose,
  compile
}