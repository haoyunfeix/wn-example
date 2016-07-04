var w = require('widl-nan');
var g = w.generator;

g.addFile('meal.widl')
.then(function () {
  g.compile();
  g.writeToDir('generated');
});
