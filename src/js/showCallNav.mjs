function showCallMenu () {
  const callWindow = document.querySelector('.call-navigation')
  const block2 = document.querySelector('.flex-block-2')
  const showWindowBtn = document.querySelector('.checkstatus')
  const closeWindowBtn = callWindow.querySelector('.call_close')
  let isHidden = true;

  console.log(showWindowBtn)
  console.log(callWindow)
  console.log(closeWindowBtn)

  function showWindowCall() {
    if (isHidden) {
      Object.assign(callWindow.style, {
        display: 'grid',
        position: 'absolute',
        top: '0'
      })
      block2.style.opacity = '10%'
    } else {
      callWindow.style.display = 'none'
    }
    isHidden = true;
  }

  function closeWindowCall() {
    callWindow.style.display = 'none'
    block2.style.opacity = '100%'
    let isHidden = true;

  }

  showWindowBtn.addEventListener('click', showWindowCall)
  closeWindowBtn.addEventListener('click', closeWindowCall)
}

export default showCallMenu;