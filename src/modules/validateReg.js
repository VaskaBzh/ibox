const validateRegistration = () => {
    const formReg = document.getElementById('form')
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    // Валидация форм
    formReg.addEventListener('submit', formRegistrate)

    async function formRegistrate(e) {
        e.preventDefault()

        
        let error = formValidate(formReg)

        if (error === 0) {
                formReg.reset()
                // linkThanks.click()
        } else {
            alert('Заполните корректно форму')
        }
    }

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
            } else if (!(document.getElementById('re-password').value == document.getElementById('password').value)) {
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
}

module.exports = validateRegistration