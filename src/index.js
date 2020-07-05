$(document).ready(function () {
  $(function () {
    $('#toggleNav').on('hide.bs.collapse', function () {
      $('.navbar-toggler').removeClass('open');
    });
    $('#toggleNav').on('show.bs.collapse', function () {
      $('.navbar-toggler').addClass('open');
    });
  });
  $("a[href^='#']").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
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
      "<span class='ti-angle-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
let cardSlot = document.getElementById('card-slot');
let slotDetails = [
  {
    src: 'assets/images/Meet-People/ray.jpg',
    name: 'Ray Okah',
    role: 'Pioneer',
  },
  {
    src: 'assets/images/Meet-People/tammy.jpg',
    name: 'Tammy',
    role: 'Community Lead',
  },
  {
    src: 'assets/images/Meet-People/debbie.jpg',
    name: 'Deborah Emeni',
    role: 'DSC Lead',
  },

  {
    src: 'assets/images/Meet-People/obinna.jpg',
    name: 'Obinna Odirionye',
    role: 'Mentor',
  },

  {
    src: 'assets/images/Meet-People/kelvin.jpg',
    name: 'Kelvin Gobo',
    role: 'Mentor',
  },
];

let topBtn = document.getElementById('topper');
window.addEventListener('scroll', () => {
  let pagePixel = pageYOffset;
  if (pagePixel > 400) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});
topBtn.addEventListener(
  'click',
  (e) => {
    e.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 'slow');
  },
  { passive: true }
);

$('.nav-item').hover(function () {
  $(this.childNodes[3]).removeClass('navOut');
  $(this.childNodes[3]).addClass('navIn');
});

$('.nav-item').mouseleave(function () {
  $(this.childNodes[3]).removeClass('navIn');
  $(this.childNodes[3]).addClass('navOut');
});

let navBar = document.getElementById('navBar');
window.addEventListener(
  'scroll',
  () => {
    let Offset = pageYOffset;
    if (Offset > 120) {
      navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    } else {
      navBar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
  },
  { passive: true }
);
