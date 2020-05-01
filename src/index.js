$(document).ready(function() {
    $(function() {
        $('#toggleNav').on('hide.bs.collapse', function() {
            $('.navbar-toggler').removeClass('open');
        })
        $('#toggleNav').on('show.bs.collapse', function() {
            $('.navbar-toggler').addClass('open');
        })
    });
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function() {
            window.location.hash = hash;
        });
    });
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        navText: [
            "<span class='ti-angle-left'></span>",
            "<span class='ti-angle-right'></span>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});
let navBar = document.getElementById("navBar");
window.addEventListener("scroll", () => {
    let Offset = pageYOffset;
    if (Offset > 120) {
        navBar.style.backgroundColor = "rgba(255, 255, 255, 0.85)"
    } else {
        navBar.style.backgroundColor = "rgba(255, 255, 255, 1)"
    }
});
let cardSlot = document.getElementById("card-slot");
let slotDetails = [{
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
});
let topBtn = document.getElementById("topper");
window.addEventListener("scroll", () => {
    let pagePixel = pageYOffset;
    if (pagePixel > 400) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }
});
topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function() {
        window.location.hash = hash;
    });
});
