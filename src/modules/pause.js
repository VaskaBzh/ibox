const pause = () => {
    const pauseBtn = document.querySelector('.modal__info__pause img')
    const input = document.getElementById('range')

    pauseBtn.addEventListener('click', () => {
        if (pauseBtn.getAttribute('src') == '../img/pause.svg') {
            pauseBtn.setAttribute('src', '../img/play.svg')
            input.disabled = true
        } else {
            pauseBtn.setAttribute('src', '../img/pause.svg')
            input.disabled = false
        }
    })
}

module.exports = pause