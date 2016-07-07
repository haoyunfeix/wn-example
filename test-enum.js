var addon = require('bindings')('exampleAddon');

var x = new addon.Meal();

process.stdout.write("addon.log_severity = ");
console.log(addon.log_severity);

process.stdout.write("addon.stream = ");
console.log(addon.stream);

process.stdout.write("addon.preset = ");
console.log(addon.preset);

process.stdout.write("addon.option = ");
console.log(addon.option);

process.stdout.write("addon.distortion = ");
console.log(addon.distortion);

process.stdout.write("addon.format = ");
console.log(addon.format);


console.log("addon.log_severity.debug = " + addon.log_severity.debug);
console.log("addon.log_severity.none = " + addon.log_severity.none);

