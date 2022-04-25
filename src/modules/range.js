const range = () => {
    const time = document.querySelector('.modal__info__block_time span')
    const input = document.querySelector('input[type="range"]')

    input.addEventListener('input', () => {
        let value = input.value
        let output = String(~~(value / 60 / 60)) + ':' + String((~~((value / 60) % 60))) + ':' + String(~~(((value % 60) % 60)))

        time.textContent = output
    })
}

module.exports = range