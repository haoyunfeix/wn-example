var addon = require('bindings')('exampleAddon');
var Meal = addon.Meal;

console.log("new Meal()");
var x = new Meal();
console.log(x);
console.log("");

console.log("new Meal('pizza')");
x = new Meal('pizza');
console.log(x);
console.log("");

console.log("new Meal('cupcake', 2.0)");
x = new Meal('cupcake', 2.0);
console.log(x);
console.log("");


console.log("");
console.log("Method overload #1: calling prepare('ramen', 0.5);");
x.prepare("ramen", 0.5);
console.log("  ==>Meal type is: " + x.type + ", and weight in " + x.size + 'kg');

console.log("");
console.log("Method overload #2: calling prepare('pasta');");
x.prepare("pasta");
console.log("  ==>Meal type is: " + x.type + ", and weight in " + x.size + 'kg');

console.log("");
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

