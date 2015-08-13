 var parseBold = function(str) {
  var boldRegExp = /(\*\*)(.*?)\1/;
  var stra = [];
  while ((stra = boldRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<strong>' + stra[2] + '</strong>')
  }
  return str;
 }

 var parseHeadline = function(str) {
   var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
   }
   return str;
 }

var parseHorizontaleLine = function(str) {
  var horizontalRegExp = /^(?:([\*\-_] ?)+)\1\1$/gm;
  var stra = [];
  while ((stra = horizontalRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '\n<hr/>\n');
  }
  return str;
 }

<<<<<<< HEAD
var parseItalic = function(str) {
  var italicRegExp = /(\*|_)(.*?)\1/;
  var stra = [];
  while ((stra = italicRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<em>' + stra[2] + '</em>')
  }
  return str;
} 
=======
var parseLink = function(str) {
  var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/;
  var stra = [];
  while ((stra = linkRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<a ' + 'href="' + stra[2] + '">' + stra[1] + '</a>');
  }
  return str;
 }

>>>>>>> DEV2

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseBold(str);
    str = parseHeadline(str);
    str = parseHorizontaleLine(str);
<<<<<<< HEAD
    str = parseItalic(str);
=======
    str = parseLink(str);
>>>>>>> DEV2
    return str;
  }
};

module.exports = markdown;