import { showModalWindow } from './modal.js'
import { validateEmail } from './validation.js'

const emailInput = document.getElementById('email')
const validationMessage = document.getElementById('validationMessage')

const sendData = (email) => {
  const xhr = new XMLHttpRequest()
  const url = 'server_url'

  const data = {
    email: email
  }

  const jsonData = JSON.stringify(data)

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Email sent successfully!')
        showModalWindow(
          'SUCCESS!',
          'You have successfully subscribed to the email newsletter'
        )
      } else {
        console.error('Error: ' + xhr.status)
        showModalWindow('ERROR!', 'Something has gone wrong\nProbably, because i have no server\nfor sending any data\nSorry')
      }
    }
  }

  try {
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(jsonData)
  } catch (error) {
    console.error('An error occurred while sending the email: ' + error)
    showModalWindow('ERROR!', 'Something has gone wrong')
  }
}

const formSubmit = (e) => {
  e.preventDefault()

  if (!emailInput.value) {
    validationMessage.style.color = 'red'
    validationMessage.innerText = 'Please, enter your email'
  }

  if (validateEmail(emailInput.value)) {
    emailInput.value = ''
    sendData(emailInput.value)
  }
}

notificationForm.addEventListener('submit', formSubmit)
