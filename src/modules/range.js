const range = () => {
    const time = document.querySelector('.modal__info__block_time span')
    const input = document.querySelector('input[type="range"]')
    const toggle = document.querySelector('.modal__info__pause img')

    let count = 0
    let intervalId

    input.addEventListener('input', () => {
        let value = input.value
        let output = String(~~(value / 60 / 60)) + ':' + String((~~((value / 60) % 60))) + ':' + String(~~(value - (value / 60)) % 60   )

        time.textContent = output
    })

    const value = (count) => {
        input.setAttribute('value', count)
    }

    const start = () => {
        if (toggle.getAttribute('src') == '../img/stop.svg') {
            count += 10
        }
        value(count)
        if (count >= 4830) {
            clearInterval(intervalId)
        }
    }

    const player = () => {
        intervalId = setInterval(start, 10)
    }
    player()
}

module.exports = range