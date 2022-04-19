const passwordToggle = () => {
    // Смена
    let password = document.getElementById('password')
    let eye = document.querySelector('#item-password label')
    
    eye.style.backgroundImage = 'url(./img/eye.svg)'
    eye.addEventListener('click', () => {
        if (eye.getAttribute('style') == 'background-image: url("./img/eye.svg");') {
            eye.style.backgroundImage = 'url(./img/eye-Off.svg)'

            password.setAttribute('type', 'text')
        } else if (eye.getAttribute('style') == 'background-image: url("./img/eye-Off.svg");') {
            eye.style.backgroundImage = 'url(./img/eye.svg)'

            password.setAttribute('type', 'password')
        }
    })
}

module.exports = passwordToggle