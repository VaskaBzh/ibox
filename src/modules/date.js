const date = () => {
    const buttonOpen = document.querySelectorAll('calendar')
    const buttonClose = document.querySelector('.calendar__cross')
    const buttonSubmit = document.querySelector('.calendar__button')
    const modal = document.querySelector('.calendar')
    const link = document.getElementById('open-element')

    const calendar = document.getElementById('date')

    calendar.disabled = true

    const modalToggle = () => {
        modal.classList.toggle('active')
        modal.classList.toggle('active_calendar')
    }

    buttonOpen.forEach((btn, index) => {
        btn.addEventListener('click', modalToggle)
        buttonClose.addEventListener('click', modalToggle)
        buttonSubmit.addEventListener('click', () => {
            link.click()
        })
    })
}

module.exports = date