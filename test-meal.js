var addon = require('bindings')('exampleAddon');
var Meal = addon.Meal;

console.log("new Meal()");
var x = new Meal();
console.log(x);
console.log("");

console.log("new Meal('spaghetti')");
x = new Meal('spaghetti');
console.log(x);
console.log("");

console.log("new Meal('ramen', 2.0)");
x = new Meal('ramen', 2.0);
console.log(x);
console.log("");

console.log("new Meal('plate', 2.0) should throw exception");
try{
  x = new Meal('plate', 2.0);
} catch (e) {
  console.log(" ^Exception Caught: " + e);
}
console.log(x);
console.log("");

console.log(x);
console.log(".type = 'cupcake'");
x.type = 'cupcake';
console.log(" ^Assignment was ignored");
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

try {
  x.prepare("string-not-in-IDL-enum");
} catch (e) {
  console.log("Caught exception when calling x.prepare(): " + e);
}

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

