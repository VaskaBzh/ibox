const zoom = () => {
    const linkFirst = document.getElementById('go-to-first')
    const linkSecond = document.getElementById('go-to-second')
    const openButtons = document.querySelectorAll('#last')

    openButtons.forEach((btn, index) => {
        if (index < 1) {
            btn.addEventListener('click', () => {
                linkFirst.click()
            })
        } else {
            btn.addEventListener('click', () => {
                linkSecond.click()
            })
        }
    })
}

module.exports = zoom