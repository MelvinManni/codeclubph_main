let navBar = document.getElementById("navBar");    



window.addEventListener("scroll", ()=>{
    let Offset = pageYOffset;
    
    if (Offset > 120){
        navBar.style.backgroundColor = "rgba(255, 255, 255, 0.85)"
    } else{
        navBar.style.backgroundColor = "rgba(255, 255, 255, 1)"   
    }
});
