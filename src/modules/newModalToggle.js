const newModal = () => {
    const buttonOpen = document.getElementById('new')
    const buttonClose = document.querySelector('.new__cross')
    const modal = document.querySelector('.shadow')

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)
}

module.exports = newModal