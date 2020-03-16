let topBtn = document.getElementById("topper");

window.addEventListener("scroll", ()=>{
    let pagePixel = pageYOffset;

    if (pagePixel > 400){
        topBtn.style.display = "block"
    } else{
        topBtn.style.display = "none"
    } 

});


topBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});
