const sureModal = () => {
    const buttonOpen = document.getElementById('sure')
    const buttonClose = document.getElementById('close')
    const buttonEntranceForm = document.getElementById('to-entrance')
    const modal = document.querySelector('.sure')
    const linkEntranceForm = document.getElementById('back-to-entrance')

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)
    buttonEntranceForm.addEventListener('click', () => {linkEntranceForm.click()})
}

module.exports = sureModal