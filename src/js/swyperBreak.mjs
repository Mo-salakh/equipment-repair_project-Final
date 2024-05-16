function swyperBreak() {
  const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    780: {
      toggle: false,
      loop: false,
      spaceBetween: 'auto',
      slidesPerView: 'auto',
      centeredSlides: false
    }
  }
})
}

export default swyperBreak;