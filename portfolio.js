/*======== 
* NAVBAR *
=========*/
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

/*========= 
 * Footer *
 =========*/
// makes footer date dynamic
const copyright = `\xA9`
const date = new Date().getFullYear()
const footerText = document.querySelector('.copy-link')
footerText.textContent = `${copyright} Chelsey Tschida ${date}`

/*========
 *js fns *
 ========*/
// const navbar = document.querySelector('.navbar')

// // nav bar changes color on scroll
// window.onscroll = () => {
//   // to see px upon scroll
//   let top = window.scrollY
//   // console.log(top)
//   top >= 20
//     ? navbar.classList.add('scrolled')
//     : navbar.classList.remove('scrolled')
// }
