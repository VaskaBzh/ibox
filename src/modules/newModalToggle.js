const newModal = () => {
    const buttonOpen = document.getElementById('new')
    const buttonClose = document.querySelector('.new__cross')
    const buttonSubmit = document.querySelector('.new__button')
    const modal = document.querySelector('.shadow')
    const newInput = document.getElementById('list')
    const link = document.getElementById('get-element')
    const getted = document.querySelector('.new_ready')
    const gettedButton = document.querySelector('.new_ready__button')

    let formInner = document.querySelector('.new__side')
    let buttonInner = document.querySelector('.new__IMEI label')
    
    newInput.setAttribute('autocomplete', 'off')

    
        buttonInner.addEventListener('click', () => {
            if (buttonInner.getAttribute('style') == 'top: 6%;') {
                formInner.style.display = 'none'
                formInner.textContent = ''
                buttonInner.style.top = 23 + '%'
            } else {
                formInner.style.display = 'flex'
                formInner.textContent = 'Данные о IMEI вы можете найти в меню вашего устройства при подключенном кабеле Cloud и вставленной SIM-карте. Нажмите кнопку М на устройстве, спуститесь по меню до пункта IMEI и нажмите на кнопку OK. Открывшийся ряд чисел необходимо ввести в поле, не нарушая последовательности'
                buttonInner.style.top = 6 + '%'
            }
        })
    
        

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault()
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