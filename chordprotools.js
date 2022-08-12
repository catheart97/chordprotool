// tools.js //

const chordpro = require("./chordpro")

const STYLE_HEADER = `<!DOCTYPE HTML><html><head>
<style>
h1 {
    text-align: center;
    margin-bottom: 10px;
}
h2 {
    text-align: center;
    margin-top: 5px;
    font-style: italic;
    font-size: large;
}

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    zoom: 1.3;
}

.chord {
    color: red;
}

.comment {
    font-weight: bold;
    padding-top: .5cm;
    padding-bottom: .2cm;
}
table.center {
    margin-left: auto;
}
.left {
    text-align: right;
}
</style>
</head>
`
/**
 * Creates html code from a song.
 * 
 * @param {*} song 
 * @param {*} options 
 */
function make_html(song) {
    const header = STYLE_HEADER
    html = chordpro.compile(song);

    return [
        header + "<body>" + html + "</body>",
        html
    ]
}

module.exports = {
    STYLE_HEADER,
    make_html
}