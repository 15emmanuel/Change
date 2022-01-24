

var myHeading = document.getElementById("heading");

//var move =  document.querySelector("p");
var button = document.querySelector("#change");

var myTextinput = document.querySelector("#addText");

var changeBg = document.querySelector("#changeBackground");

var button2 = document.querySelector("#set");

var body = document.querySelector("body");

button.addEventListener("click", ()=>{
   myHeading.style.color = myTextinput.value; 
})

button2.addEventListener("click", ()=>{
  body.style.backgroundColor = changeBg.value;  
})



/*move.addEventListener("mouseover", ()=>{
       move.textContent.toUpperCase();
})*/