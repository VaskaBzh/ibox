const inputTitle = () => {
    const title = document.querySelector('.modal__new__title')
    const change = document.getElementById('change')
    const cross = document.getElementById('cross-little')
    const tick = document.getElementById('acsess')

    title.disabled = true

    change.addEventListener('click', () => {
        title.disabled = false

        change.style.display = 'none'
        cross.style.display = 'block'
        tick.style.display = 'block'
    })
    tick.addEventListener('click', () => {
        title.disabled = true

        change.style.display = 'block'
        cross.style.display = 'none'
        tick.style.display = 'none'
    })
    cross.addEventListener('click', () => {
        title.setAttribute("value", "Sonar LaserScan Signature Cloud")
        title.disabled = true

        change.style.display = 'block'
        cross.style.display = 'none'
        tick.style.display = 'none'
    })
}

module.exports = inputTitle