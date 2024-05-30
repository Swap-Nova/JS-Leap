// @ts-check
console.log("=====================");
console.log("Async Concepts");
console.log("=====================");
// async example
console.log("Async Block-1");
setTimeout(function () {
    console.log("Async Block Result");
}, 2000);
console.log("Async Block-2");
setTimeout(function () {
    console.log("=====================");
}, 3000);
// promises
var number = new Promise(function (resolve, reject) {
    var n = Math.floor(Math.random() * 10);
    if (n < 5) {
        return resolve();
    }
    else {
        return reject();
    }
});
number.then(function () {
    console.log("The number is less than 5");
});
number.catch(function () {
    console.log("The number is greather than 5");
});
console.log("=====================");
