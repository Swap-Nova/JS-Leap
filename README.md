## Purpose of the repo
- To go through the old JS topics required to build real-time applications.
- Understand the syntax of the code base and get the best practices.
- Code and logic of JS topics like Promises and Async-Await

## Async
- All tasks will run simultaneously and whatever task is completed first the output of that will be generated. Therefore, there is no order in this.
- There are times when the final code output is dependent on a different server, at those times we don’t know when the output will be received back to us from the other server so we cannot write sync codeand therefore, we use asyncconcepts in order to avoid blocking and whenever the required output comes from the other server the code will run.
- There’s a main-stack for the sync variables and a side-stack for the async variables. Once the async variable run-time is allotted it is then moved to the main-stack for the final execution, i.e., all the variables that are first present in the main-stack run and then the complier looks at the side-stack.
- JS is not asynchronous: JavaScript is a single-threaded language which means that at a time JS can only work on one async task. Therefore, it actually balances out the work. 
For eg: There are two async tasks ‘A’ and ‘B.’ During execution, it will balance the work that means it will do one job of ‘A’ and then move to other job of ‘B’, etc.

```js
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
```

## Promises 
- In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. The possible outcomes here are similar to that of promises in real life
```js
// added void since resolve() must have an argument
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
```

![](https://github.com/Swap-Nova/JS-Reinvigorate/blob/main/crash/README.gif)
