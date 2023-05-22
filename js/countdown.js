const countDownDate = new Date('May 31, 2023 00:00:00').getTime()

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

setInterval(() => {
  const now = new Date().getTime()
  const distance = countDownDate - now

  days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.innerText = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000)
}, 1000)
