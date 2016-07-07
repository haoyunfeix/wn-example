var w = require('widl-nan');
var g = w.generator;

Promise.all([
  g.addFile('meal.widl'),
  g.addCppEnum('rs.hpp')
  ]).then(function () {
    g.compile();
    g.writeToDir('generated');
  }).catch(e => {
    console.log(e);
  });
