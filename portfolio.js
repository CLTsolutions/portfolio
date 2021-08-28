/* ===== NAV BAR ===== */

// nav bar changes color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $('.navbar')
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
})

// hides navbar dropdown on mobile once link is selected
$('.navbar-nav>.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide')
})

/* ====== Footer ====== */

{
  /* <a class="copy-link scroll top text-muted" href="#"
            >&copy Chelsey Tschida 2020</a> */
}

const date = new Date().getFullYear()
const footerText = document.querySelector('.copy-link')
footerText.textContent = `© Chelsey Tschida ${date}`
