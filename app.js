const countDownDate = new Date("May 31, 2023 00:00:00").getTime()

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now

    days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000)
}, 1000)



const emailInput = document.getElementById('email')
const validationMessage = document.getElementById('validationMessage')
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

const validateEmail = (value) => EMAIL_REGEXP.test(value)

const onEmailInput = () => {
    if (!validateEmail(emailInput.value)) {
        validationMessage.innerText = 'Please, enter a valid email'
        validationMessage.style.color = 'red'
    } else {
        validationMessage.innerText = ''
    }
}
emailInput.addEventListener('input', onEmailInput)


const notificationForm = document.getElementById('notificationForm')

const formSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(emailInput.value)) {
        emailInput.value = ''
        console.log('sadsad');
    }
}

notificationForm.addEventListener('submit', formSubmit)