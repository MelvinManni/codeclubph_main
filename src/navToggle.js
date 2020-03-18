
let navIcon = document.getElementById("navIcon");
let navClose = document.getElementById("navIconClose");







navIcon.addEventListener("click", () => {

    if (navIcon.style.display = 'block') {

        navClose.style.display = 'block';
        navIcon.style.display = 'none'

    }
});


navClose.addEventListener("click", ()=>{

    if (navClose.style.display = 'block') {

        navClose.style.display = 'none';
        navIcon.style.display = 'block'

    }
})