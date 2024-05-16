function showText() {
  const elementsParent = document.querySelector('.textParent');
  const btnShowTextContent = document.querySelector('.btn-show-text');
  let isHidden = false;
  
  function showAndHide() {

    if(isHidden) {
      elementsParent.style.height = '5.9rem';
    } else {
      elementsParent.style.height = 'auto';
    }

    isHidden = !isHidden;
  }

  btnShowTextContent.addEventListener('click', showAndHide)

}

export default showText;