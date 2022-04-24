const validationForm = () => {
    const form = document.getElementById('form')
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    const link = document.querySelector('.button_link')
    const formGet = document.querySelector('.get__form')
    const modal = document.querySelector('.shadow')
    const buttonOpen = document.getElementById('get')
    const buttonClose = document.querySelector('.get__cross')
    const modalGetted = document.querySelector('.already')
    const buttonCloseGetted = document.querySelector('.already__button')
    const info = document.querySelector('.already__getted span')
    const getInput = document.querySelector('.get__input')

    const modalToggle = () => {
        modal.classList.toggle('active')
    }

    const modalToggleGetted = () => {
        modalGetted.classList.toggle('active')
    }

    buttonOpen.addEventListener('click', modalToggle)
    buttonClose.addEventListener('click', modalToggle)

    buttonCloseGetted.addEventListener('click', modalToggleGetted)
    buttonCloseGetted.addEventListener('click', modalToggle)

    // Валидация форм

    const formValidate = function (form) {
        let error = 0
        let formReq = form.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)

            if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input)
                error++
            } else if (input.value === '') {
                formAddError(input)
                error++
            } else if (input.getAttribute("type") === "email" && reg.test(document.getElementById('email').value) == false) {
                formAddError(input)
                error++
            }
        }
        return error
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    formGet.addEventListener('submit', formEnterGet)

    async function formEnterGet(e) {
        e.preventDefault

        let error = formValidate(formGet)

        if (error === 0) {
            modalToggleGetted()
            info.textContent = getInput.value
        } else {
            alert('Заполните корректно форму')
        }
    }

    form.addEventListener('submit', formEnter)

    async function formEnter(e) {
        e.preventDefault()
        
        let error = formValidate(form)

        if (error === 0) {
                form.reset()
                link.click()
        } else {
            alert('Заполните корректно форму')
        }
    }
}

module.exports = validationForm