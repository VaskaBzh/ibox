const modalHow = () => {
    const linkOpen = document.querySelector('.registrate__link_IMEI')
    const modal = document.querySelector('.how')
    const buttonClose = modal.querySelector('#close')

    const modalToggle = (e) => {
        e.preventDefault()
        modal.classList.toggle('active')
    }

    linkOpen.addEventListener('click', modalToggle(e))
    buttonClose.addEventListener('click', modalToggle)
}

module.exports = modalHow