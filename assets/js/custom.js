const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



// Toggle Menu Functionaliy Start

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".close-icon").click(function () {
    $("body").removeClass("menuToggle");
  });
});  
// Toggle Menu Functionaliy End


// Read More Functionality JS Start

$('.close-text-button ').click(function (e) {
  e.preventDefault();

  const $btn = $(this);
  const $content = $btn.parent().prev();

  // Toggle the content visibility
  $content.slideToggle('slow');

  // Check and toggle the button text
  
  if ($btn.data('state') === 'less') {
    $btn.html('Read More <i class="fa-solid fa-angle-down"></i>');
    $btn.data('state', 'more');
  } else {
    $btn.html('Read Less <i class="fa-solid fa-angle-up"></i>');
    $btn.data('state', 'less');
  }
});


// Read More Functionality JS end


// On window scroll and class javascript start


$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.site-header').addClass('headerFixed');
  } else {
     $('.site-header').removeClass('headerFixed');
  }
});

// On window scroll and class javascript end