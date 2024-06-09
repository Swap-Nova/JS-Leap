// selecting 'h1' tag elements
let h1_variable = document.querySelector("h1")
console.log(h1_variable);

// changing html
h1_variable.innerHTML = "H1 Alternate";

// changing css
h1_variable.style.color = "purple";
h1_variable.style.backgroundColor = "darksalmon";

// event listeners- Click event
h1_variable.addEventListener("click", function(){
    console.log("H1 Clicked");
    this.innerHTML= "Post Click H1 Changes";
    this.style.color= "Black";
    this.style.backgroundColor= "White";
})

// changes to bulb
let bulb_function = document.querySelector("#bulb");
let button_function = document.querySelector("button");

// logic building for on-off change
let flag = 0;

button_function.addEventListener("click", function(){
    if(flag == 0){
        bulb_function.style.backgroundColor= "Yellow";
        flag = 1;
        this.innerHTML= "OFF";
    }
    else if (flag == 1){
        bulb_function.style.backgroundColor="White";
        flag = 0;
        this.innerHTML= "ON";
    }
    else{
        console.log("Button broken");
    }
});

// query selector all
let h2_selector = document.querySelectorAll("h2");
console.log(h2_selector);
// since this is array format we can use `forEach`
h2_selector.forEach((data)=>{
    console.log(data);
})

// class and id
let id_selector = document.getElementById("top-container");
let class_selector = document.getElementsByClassName("class-1-container");

// textselector vs inner html
id_selector.innerHTML = "<h1>Halo Shift </h1>"; // will not include `<h1>` in text
// id_selector.textContent = "<h1>Halo Shift</h1>"; //  will include `<h1>` in text