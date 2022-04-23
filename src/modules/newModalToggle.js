const newModal = () => {
    const buttonOpen = document.getElementById('new')
    const buttonClose = document.querySelector('.new__cross')
    const buttonSubmit = document.querySelector('.new__button')
    const modal = document.querySelector('.shadow')
    const newInput = document.getElementById('list')
    const link = document.getElementById('get-element')

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)
    buttonSubmit.addEventListener('click', (e) => {
        if (newInput.value != '') {
            link.click()
        } else {
            e.preventDefault
        }
    })
}

module.exports = newModal