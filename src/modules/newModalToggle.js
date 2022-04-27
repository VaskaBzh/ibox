const newModal = () => {
    const buttonOpen = document.getElementById('new')
    const buttonClose = document.querySelector('.new__cross')
    const buttonSubmit = document.querySelector('.new__button')
    const modal = document.querySelector('.shadow')
    const newInput = document.getElementById('list')
    const link = document.getElementById('get-element')
    const getted = document.querySelector('.new_ready')
    const gettedButton = document.querySelector('.new_ready__button')

    let formInner = document.querySelector('.new__IMEI')
    let buttonInner = document.querySelector('.new__IMEI label')

    buttonInner.addEventListener('click', () => {
        formInner.innerHTML = '<input id="IMEI" type="text" class="input new__input window__input" placeholder="IMEI нового устройства/"><label for="IMEI">?</label><div class="new__side">Подсказка</div>'

        formInner = document.querySelector('.new__IMEI')
        buttonInner = document.querySelector('.new__IMEI label')
        buttonInner.style.top = 13 + '%'
    })

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

    // кнопка добавить, изменение плюса
    const button = document.querySelector('#new img')

    buttonOpen.addEventListener('mouseover', () => {
        button.setAttribute('src', '../img/plus-white.png')
    })
    buttonOpen.addEventListener('mouseleave', () => {
        button.setAttribute('src', '../img/plus.svg')
    })
}

module.exports = newModal