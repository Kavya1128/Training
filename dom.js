// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("test");
// div.innerText = "<h1>Header</h1>"
// console.log(div);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow";
// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map((element)=>{
//     element.style.backgroundColor="teal";
// })

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementByName("username");
// [...ele].map(element=>{


// let ele = document.querySelectorAll(".test");
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

// let Red = document.getElementById("Red"); 
// Red.addEventListener("mouseover", () => {
//     document.body.style.background = "Red"; 
// });
// Red.addEventListener("mouseleave", () => {
//     document.body.style.background = "white"; 
// });

// let Yellow = document.getElementById("Yellow"); 
// Yellow.addEventListener("mouseover", () => {
//     document.body.style.background = "Yellow"; 
// });
// Yellow.addEventListener("mouseleave", () => {
//     document.body.style.background = "white"; 
// });

// let Blue = document.getElementById("Blue"); 
// Blue.addEventListener("mouseover", () => {
//     document.body.style.background = "Blue"; 
// });
// Blue.addEventListener("mouseleave", () => {
//     document.body.style.background = "white"; 
// });

// let Green = document.getElementById("Green"); 
// Green.addEventListener("mouseover", () => {
//     document.body.style.background = "Green"; 
// });
// Green.addEventListener("mouseleave", () => {
//     document.body.style.background = "white"; 
// });

// let Black = document.getElementById("Black"); 
// Black.addEventListener("mouseover", () => {
//     document.body.style.background = "Black"; 
// });
// Black.addEventListener("mouseleave", () => {
//     document.body.style.background = "white"; 
// });

let bgColor =  document.querySelectorAll(".bgColor");
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor=element.innerText;
});
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor="transparent";
    })
})
