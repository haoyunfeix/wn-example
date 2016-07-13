"use strict";

const path = require('path');
const fs = require("fs.promised");
const mkdirp = require("mkdirp");

const webIDL2 = require("webidl2");
const dot = require("dot");
dot.templateSettings.strip = false; // Do not remove spaces & linebreaks
const dots = dot.process({path: path.join(__dirname, "templates")});

const _writeFile = function(name, text) {
  return fs.writeFile(name, text);
};

const _packEmptyLines = function(str) {
  return str.replace(/\n{3,}/gm, '\n\n').replace(/(\r\n){3,}/gm, '\r\n\r\n');
};

const _parseIDL = function(idlText) {
  return webIDL2.parse(idlText);
};

const _readFile = function (path) {
  return fs.readFile(path);
};

function generateTestCase() {
  var inputFileName = 'meal.widl';

  _readFile(inputFileName)
    .then(data => {
      var idlTree = _parseIDL(data.toString());
      idlTree.forEach(def => {
        if (def.type === 'interface') {
          const testText = _packEmptyLines(dots.apiExistence(def));
          const dirName = 'generated';
          mkdirp.sync(dirName);
          const fileName = path.join(dirName, 'test-' + def.name.toLowerCase() + '-api-existence.js');
          console.log(fileName);
          _writeFile(fileName, testText);

        }
      });
    })
    .catch(e => {
      console.log(e);
    });

}

generateTestCase();
