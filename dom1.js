// let mainEle = document.createElement("div");
// mainEle.setAttribute("class" , "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// bottomEle.setAttribute("class" , "topBlock");

// let image = document.createElement("img");
// image.src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600";
// image.width="300"
// image.height="300"
// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");
// let h1 = document.createElement("h1");
// h1.innerText="Heading";
// let btn = document.createElement("buttom");
// btn.innerText="View More";
// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image)
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);


let form=document.querySelectorAll('form');
let name = document.getElementById("uName");
let password = document.getElementById("uPass");
let check= document.getElementById("check");
let show = document.getElementById("show");
// let gen = document.getElementById("gender");

check.addEventListener("click", event => {
    // console.log(event.target.checked);
    if (event.target.checked === true) {
        password.setAttribute("type", "text");
        show.innerText = "hide password"
    } else {
        password.setAttribute("type", "password");
        show.innerText = "show password"
    }
})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = name.value;
    let password = password.value;
    // let gender = gen.value();

    let userDetails = {
        name , password 
    };
    console.log(userDetails);

});



// let form = document.querySelector("form")

// let username = document.getElementById("uName");

// let password = document.getElementById("uPass");
// let check = document.getElementById("check");
// let show = document.getElementById("show");

// let gen = document.getElementsByName("gender");

// check.addEventListener("click",event=>{
//     // console.log(event);
//     if(event.target.checked == true){
//         password.setAttribute("type","text");
//         show.innerText = "hide password"
//     }else{
//         password.setAttribute("type","password")
//         show.innerText = "show password"
//     }
// })

// form.addEventListener("submit",event=>{
//     event.preventDefault();
//     let un = username.value;
//     let up = password.value;
//     // console.log(un,up);
//     let gender="";
//     for(let i=0;i<=gen.length-1;i++){
//         if(gen[i].checked == true){
//             // console.log("true", gender[i].value);
//             gender += gen[i].value;
//         }
//     }
//     let userDetails={
//         un,up,gender
//     };
//     console.log(userDetails);
// })