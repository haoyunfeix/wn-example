var addon = require('bindings')('exampleAddon');

var x = new addon.Meal();

x.prepare("ramen", 0.5);
console.log(x.type + ", " + x.size);

console.log("raw meal? " + (x.isRawMeal ? "Yes" : "Not any more"));

console.log("Waiting for promise...");

x.cook("Trump").then(
  value => {
    console.log("Resolved as: " + value);
    console.log("raw meal? " + (x.isRawMeal ? "Yes" : "Not any more"));
  	
  }
);
console.log("raw meal? " + (x.isRawMeal ? "Yes" : "Not any more"));

