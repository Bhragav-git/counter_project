let inc = document.querySelector(".inc");
let reset = document.querySelector(".reset");
let dec = document.querySelector(".dec");
let title = document.querySelector("h1");
let body = document.querySelector("body")
let num = 0;

const limit = 20;
function maxlimit(){
  if(num > limit){
    num = limit
    title.innerText = limit;
  }
  if(num < 0){
    num = 0;
  }
} 
inc.addEventListener("click",() =>{
  num++
  title.innerText = num;
  bgColorChange();
  maxlimit();
})
dec.addEventListener("click",() =>{
  num--
  maxlimit();
  title.innerText = num;
  bgColorChange();
})
reset.addEventListener("click",() =>{
  num = 0;
  title.innerText = num;
  bgColorChange();
  maxlimit();
})

function bgColorChange(){
  if(num > 0){
    body.style.backgroundColor = "green";
  }
  else if( num < 0){
    body.style.backgroundColor = "red";
  }
  else{
    body.style.backgroundColor = "black";
  }
}
