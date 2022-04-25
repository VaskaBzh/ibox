const date = () => {
    const buttonOpen = document.querySelectorAll('#calendar')
    const buttonClose = document.querySelector('.calendar__cross')
    const buttonSubmit = document.querySelector('.calendar__button')
    const modal = document.querySelector('.calendar')
    const link = document.getElementById('open-element')
    const linkTwo = document.getElementById('open-element-second')

    const calendar = document.getElementById('date')

    calendar.disabled = true

    const modalToggle = () => {
        modal.classList.toggle('active')
        modal.classList.toggle('active_calendar')
    }

    buttonOpen.forEach((btn, index) => {
        btn.addEventListener('click', modalToggle)
        btn.addEventListener('click', () => {
            buttonClose.addEventListener('click', modalToggle)
            if (index < 1) {
                buttonSubmit.addEventListener('click', () => {
                    link.click()
                })
            } else if (index = 1) {
                buttonSubmit.addEventListener('click', () => {
                    linkTwo.click()
                })
            }
        })
    })
}

module.exports = date