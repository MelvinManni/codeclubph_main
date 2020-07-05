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
});