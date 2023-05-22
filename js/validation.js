const emailInput = document.getElementById('email')
const validationMessage = document.getElementById('validationMessage')

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu


export const validateEmail = (value) => EMAIL_REGEXP.test(value)

const onEmailInput = () => {
  if (!validateEmail(emailInput.value)) {
    validationMessage.innerText = 'Please, enter a valid email'
    validationMessage.style.color = 'red'
  } else {
    validationMessage.innerText = ''
  }
}
emailInput.addEventListener('input', onEmailInput)
