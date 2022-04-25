const newModal = () => {
    const buttonOpen = document.getElementById('new')
    const buttonClose = document.querySelector('.new__cross')
    const buttonSubmit = document.querySelector('.new__button')
    const modal = document.querySelector('.shadow')
    const newInput = document.getElementById('list')
    const link = document.getElementById('get-element')
    const getted = document.querySelector('.new_ready')
    const gettedButton = document.querySelector('.new_ready__button')

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)
    buttonSubmit.addEventListener('click', () => {
        if (newInput.value != '') {
            getted.classList.toggle('active')
            gettedButton.addEventListener('click', () => {link.click()})
        }
    })
}

module.exports = newModal