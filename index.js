var fisToGulpHtml = require('./fisToGulp-html'),      //fis的html特性移植
    fisToGulpJs = require('./fisToGulp-js');          //fis的js特性移植

module.exports = {
    html: fisToGulpHtml,
    js: fisToGulpJs
};