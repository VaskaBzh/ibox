const modalToggle = () => {
    const modalButton = document.querySelector('.tracking__button')
    const modalArrow = document.querySelector('.tracking__button img')
    const modal = document.querySelector('.modal')

    modalButton.addEventListener('click', () => {
        if (modalArrow.getAttribute('style') == 'transform: rotate(0deg);') {
            modalArrow.style.transform = 'rotate(180deg)'
            modalButton.style.transform = 'translateX(-465px)'
            modal.style.transform = 'translateX(-465px)'
        } else {
            modalArrow.style.transform = 'rotate(0deg)'
            modalButton.style.transform = 'translateX(0px)'
            modal.style.transform = 'translateX(0px)'
        }
    })
}

module.exports = modalToggle