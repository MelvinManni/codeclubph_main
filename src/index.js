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
    src: 'assets/images/Meet-People/1.png',
    name: 'Anderson John',
    role: 'Code Club Lead',
  },
  {
    src: 'assets/images/Meet-People/2.png',
    name: 'Jessica Mike',
    role: 'Code Club Lead',
  },
  {
    src: 'assets/images/Meet-People/3.png',
    name: 'Sarah John',
    role: 'Code Club Lead',
  },
  {
    src: 'assets/images/Meet-People/4.png',
    name: 'Lisa Mendez',
    role: 'Code Club Lead',
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
topBtn.addEventListener('click', (e) => {
  e.preventDefault();

  $('html, body').animate({ scrollTop: 0 }, 'slow');
});
