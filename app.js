

var span = document.querySelectorAll("#hero h1 p");
var h1= document.querySelectorAll("#hero h1");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".navList ul");
const menu_Items =document.querySelectorAll(".navList ul a");
const header = document.querySelector(".container");



for(var i=0; i<3 ; i++){
    span[i].style.animation = `textOpenBox 1s ease ${i+0.3}s`;
    
}
for(var j=0; j<3 ; j++){
        h1[j].style.animation = `textOpen 1s ease forwards ${j+0.8}s`;
    if(h1[2]){
        h1[2].style.animation = `textOpenLast 1s ease forwards ${j+0.8}s`;  
    }
    
}

hamburger.addEventListener("click", () =>{
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("toggle");
})
document.addEventListener('scroll', ()=>{
    var scrollPosition = window.scrollY;
    if(scrollPosition > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

for(var i= 0; i < menu_Items.length; i++){
    menu_Items[i].addEventListener("click",() =>{
        mobileMenu.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    })
}