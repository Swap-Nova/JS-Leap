// @ts-check
console.log("=====================");
console.log("Async Concepts");
console.log("=====================");

// async example
console.log("Async Block-1");
setTimeout(function(){
    console.log("=====================");
    console.log("Async Block Result");
},2000)
console.log("Async Block-2");
setTimeout(function(){
    console.log("=====================");
},3000)

// without async-await
function api_call_1(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })
}
api_call_1();

// with async-await
async function api_call_2(){
    let raw = await fetch(`https://randomuser.me/api`);
    // the above is async and therefore we have to wait once it is extracted in raw
    // using await below as well because we have to first for the above data to be extracted
    let data = await raw.json();
    console.log(data);
}
api_call_2();