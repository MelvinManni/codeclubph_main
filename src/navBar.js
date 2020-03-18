let navBar = document.getElementById("navBar"),    



window.addEventListener("scroll", ()=>{
    let Offset = pageYOffset;
    
    if (Offset > 120){
        navBar.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    } else{
        navBar.style.backgroundColor = "rgba(255, 255, 255, 1)"   
    }
});
