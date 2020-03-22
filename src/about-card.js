let cardSlot = document.getElementById("card-slot");

let slotDetails = [
    {
        src: "assets/images/Meet-People/1.png",
        name: "Anderson John",
        role: "Code Club Lead"
    },

    {
        src: "assets/images/Meet-People/2.png",
        name: "Jessica Mike",
        role: "Code Club Lead"
    },

    {
        src: "assets/images/Meet-People/3.png",
        name: "Sarah John",
        role: "Code Club Lead"
    },

    {
        src: "assets/images/Meet-People/4.png",
        name: "Lisa Mendez",
        role: "Code Club Lead"
    }
]



slotDetails.map((slot) => {

    let div = document.createElement("div"),
        img = document.createElement("img"),
        p = document.createElement("p"),
        span = document.createElement("span"),
        span2 = document.createElement("span");

    div.className = "img-card flex";
    img.className = "round-image";
    span2.className = "slot-role";
    span.className = "slot-name";

    img.src = slot.src;
    span.innerHTML = slot.name;
    span2.innerHTML = slot.role;

    cardSlot.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    p.appendChild(span);
    p.appendChild(span2)
}
)