var addon = require('bindings')('exampleAddon');

var x = new addon.Meal();

x.prepare("ramen", 0.5);
console.log("Meal type is: " + x.type + ", and weight in " + x.size + 'kg');

console.log("raw meal? " + (x.isRawMeal ? "Yes" : "Not any more"));

console.log('Call cook() method and waiting for promise...');

var timer = setInterval(function() {
  process.stdout.write('.');
}, 100);

x.cook("Trump").then(
  value => {
    console.log(value);
    console.log("raw meal? " + (x.isRawMeal ? "Yes" : "Not any more"));
    clearInterval(timer);
  }
);
console.log("raw meal? " + (x.isRawMeal ? "Yes" : "Not any more"));

