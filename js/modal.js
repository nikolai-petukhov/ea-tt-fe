const modalWindow = document.getElementById('modalWindow')
const modalHeading = document.getElementById('modalHeading')
const modalMessage = document.getElementById('modalMessage')

const closeModalWindow = () => {
  modalWindow.style.display = 'none'
}

const closeModalWindowOnBackground = (event) => {
    if (event.target === event.currentTarget) {
        closeModalWindow()
    }
}

export const showModalWindow = (heading, message) => {
  modalHeading.innerText = heading
  modalMessage.innerText = message
  modalWindow.style.display = 'flex'

  const closeButtons = document.getElementsByClassName('clsBtn')
  closeButtons[0].addEventListener('click', closeModalWindow)
  closeButtons[1].addEventListener('click', closeModalWindow)
  modalWindow.addEventListener('click', closeModalWindowOnBackground)
}
