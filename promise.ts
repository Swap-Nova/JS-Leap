// @ts-check

console.log("=====================");

// promises
let number = new Promise<void>((resolve,reject)=>{
    let n = Math.floor(Math.random()*10);
    console.log("Number Generated: " + n);
    if(n<5){
        return resolve();
    }
    else{
        return reject();
    }
})
number.then(function(){
    console.log("The number is less than 5");
})
.catch(function(){
    console.log("The number is greather than 5");
})
console.log("=====================");

// practice of promises: internal promise
let house = new Promise<void>(function(resolve,reject){
    return resolve()
})

house.then(function(){
    console.log("Returned Home");

    // gate promise
    let gate = new Promise<void>(function(resolve,reject){
        return resolve();
    })
    gate.then(function(){
        console.log("Open and close the gateway");
    })
    .catch(function(){
        console.log("Unable to open and close the gateway");
    })

    // rest promise
    let other_activities = new Promise<void>(function(resolve,reject){
        return resolve();
    })
    other_activities.then(function(){
        console.log("All done, Good Night!");
    })
    .catch(function(){
        console.log("Nothing done as of now");
    })
})
// catch function
.catch(function(){
    console.log("Unable to return house");
})
console.log("=====================");

// another `promise` example
let new_example = new Promise(function(res,rej){
    return res("Hello");
})
new_example
    .then(function(data){
        console.log(data);
    })
    .catch(function(){
        console.log("Promise Rejected");
    })
console.log("=====================");

// consecutive promises
let promise_1 = new Promise(function(resolve,reject){
    return resolve("Promise 1 fulfilled")
})

let promise_2 = promise_1.then(function(data){
    console.log(data);
    return new Promise(function(resolve,reject){
        return resolve("Promise 2 fulfilled")
        console.log("=====================");
    })
})
.catch(function(){
    console.log("Skipped");
})

let promise_3 = promise_2.then(function(data){
    console.log(data);
    return new Promise((resolve,reject)=>{
        return resolve("Promise 3 fulfilled")
        console.log("=====================");
    })
})
.catch(()=>{
    console.log("Skipped");
})

let promise_4 = promise_3
                .then(function(data){
                    console.log(data);
                    return new Promise((resolve,reject)=>{
                        return resolve("Promise 4 fulfilled")
                        console.log("=====================");
                    })
                })
                .catch(function(){
                    console.log("Skipped");
                })

promise_4.then(()=>{
    console.log("Promise 4 fulfilled");
})
.catch(()=>{
    console.log("Skipped");
})

// timeout function
setTimeout(()=>{
    console.log("=====================");
},3000);

// replacing with async await function
(async function(){
    let number_check = new Promise<void>((res,rej)=>{
        let n = Math.floor(Math.random()*10);
        console.log("Generated Number: " + n);
        if(n<5){
            return res();
        }
        else{
            return rej();
        }
    })

    try{
        await number_check;
        console.log("The number is less than 5");
    }
    catch{
        console.log("The number is greater than 5");
    }
})();
console.log("=====================");
