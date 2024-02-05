function toggleMenu(){
    let menu=document.querySelector(".menu-links");
    let icon=document.querySelector(".menu-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function toggleLike1(){
    let likeCounters = document.getElementsByClassName("like-counter");
    let element=likeCounters[0];
    let likeValue = element.querySelector("span").innerHTML;
    let likeImage = element.querySelector("img");
    if (likeValue === '0') {
        likeImage.src = "Assets/like-red.png";
        element.querySelector("span").textContent="1";
    } else {
        likeImage.src = "Assets/like-white.png";
        element.querySelector("span").textContent="0";

    }

}
function toggleLike2(){
    let likeCounters = document.getElementsByClassName("like-counter");
    let element=likeCounters[1];
    let likeValue = element.querySelector("span").innerHTML;
    let likeImage = element.querySelector("img");
    if (likeValue === '0') {
        likeImage.src = "Assets/like-red.png";
        element.querySelector("span").textContent="1";
    } else {
        likeImage.src = "Assets/like-white.png";
        element.querySelector("span").textContent="0";

    }

}
function toggleLike3(){
    let likeCounters = document.getElementsByClassName("like-counter");
    let element=likeCounters[2];
    let likeValue = element.querySelector("span").innerHTML;
    let likeImage = element.querySelector("img");
    if (likeValue === '0') {
        likeImage.src = "Assets/like-red.png";
        element.querySelector("span").textContent="1";
    } else {
        likeImage.src = "Assets/like-white.png";
        element.querySelector("span").textContent="0";
    }
}

function lightToDark() {
    var currentStylesheet = document.getElementById('light');
    currentStylesheet.href = 'dark.css';
}

function darkToLight(){
    var currentStylesheet = document.getElementById('light');
    currentStylesheet.href = 'light.css';
}


   
    
   
  

  
   

function toggleMode() {
    
    let mode = document.querySelector(".mode");

    if (mode.src.endsWith("moon.png")) {
        mode.src = "Assets/sun.png";
        lightToDark()
    } else {
        mode.src = "Assets/moon.png";
        darkToLight()
    }

}


    
    
    
    
    

     
    
    