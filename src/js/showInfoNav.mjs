function showInfoNav() {
  const infoWindow = document.querySelector('.info-navigation')
  const block2 = document.querySelector('.flex-block-2')
  const showWindowBtn = document.querySelector('.repair')
  const closeWindowBtn = infoWindow.querySelector('.info_close')
  let isHidden = true;


  function showWindowInfo() {
    if (isHidden) {
      Object.assign(infoWindow.style, {
        display: 'grid',
        position: 'absolute',
        top: '0'
      })
      block2.style.opacity = '10%'
    } else {
      infoWindow.style.display = 'none'
    }

    isHidden = true;
  }

  function closeWindowInfo() {
    infoWindow.style.display = 'none'
    block2.style.opacity = '100%'
    let isHidden = true

  }

  showWindowBtn.addEventListener('click', showWindowInfo)
  closeWindowBtn.addEventListener('click', closeWindowInfo)
}

export default showInfoNav
