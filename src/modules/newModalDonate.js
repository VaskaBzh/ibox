const newModal = () => {
    const buttonOpen = document.getElementById('new')
    const buttonClose = document.getElementById('back-to-page')
    const buttonSubmit = document.getElementById('click')
    const modal = document.querySelector('.donate')
    const link = document.getElementById('donate-new')

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)
    buttonSubmit.addEventListener('click', () => {
        link.click()
    })
}

module.exports = newModal