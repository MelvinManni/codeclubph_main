let navBar = document.getElementById("navBar"),
    navDrop = document.getElementById("navBar-Personal"),
    navIcon = document.getElementById("navIcon");


if (navDrop.style.visibility == "visible") {
    navIcon.src = "assets/images/icon/close.svg";
}

window.addEventListener("scroll", ()=>{
    let Offset = pageYOffset;
    
    if (Offset > 120){
        navBar.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    } else{
        navBar.style.backgroundColor = "rgba(255, 255, 255, 1)"   
    }
});


