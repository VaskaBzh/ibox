const newSelect = () => {
    const selectInput = document.getElementById('list')
    const selectButton = document.querySelector('.new__chose label')
    const selectOption = document.querySelectorAll('.new__list__elem')
    const selectList = document.querySelector('.new__list')

    const selectToggle = () => {
        selectList.classList.toggle('active')
    }

    selectButton.addEventListener('click', () => {
        if (selectButton.getAttribute('style') == 'transform: rotate(0deg);') {
            selectButton.style.transform = 'rotate(180deg)'

            selectToggle()
        } else {
            selectButton.style.transform = 'rotate(0deg)'

            selectToggle()
        }
    })

    selectOption.forEach((option) => {
        option.addEventListener('click', () => { 
            selectInput.value = option.textContent

            selectToggle()
        })
    })
}

module.exports = newSelect