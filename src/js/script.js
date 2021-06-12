const hourHand = document.querySelector('.hour-hand')
const minsHand = document.querySelector('.min-hand')
const secondsHand = document.querySelector('.second-hand')

function setClock() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDeg = ((seconds / 60) * 360) + 90
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`
    
    const mins = now.getMinutes()
    const minsDeg = ((mins / 60) * 360) + 90
    minsHand.style.transform = `rotate(${minsDeg}deg)`

    const hour = now.getHours()
    const hourDeg = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setClock, 1000)

setClock()