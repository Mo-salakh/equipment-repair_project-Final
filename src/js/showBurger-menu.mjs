function showBurgerMenu() {

const burgerMenu = document.querySelector('.burger-navigation');
const menuOpenBtn = document.querySelector('.burger');
const menuCloseBtn = document.querySelector('.burger_close');
const block2 = document.querySelector('.flex-block-2');
let isHidden = true;

function openMenu() {
  if (isHidden) {
    Object.assign(burgerMenu.style, {
      display: 'grid',
      position: 'absolute',
      top: '0',
    })
    Object.assign(block2.style, {
      opacity: '10%',
    })
  } else {
    burgerMenu.style.display = 'none'
  }

  isHidden = !isHidden
}

function closeMenu() {
  burgerMenu.style.display = 'none'
  Object.assign(block2.style, {
    opacity: '100%',
  })
  isHidden = !isHidden
}

menuOpenBtn.addEventListener('click', openMenu)
menuCloseBtn.addEventListener('click', closeMenu)
}

export default showBurgerMenu;