const select = ()=> {
    const selectBlock = document.querySelector('.modal__info__block__select')
    const arrow = document.querySelector('.modal__info__block__select img')
    const list = document.querySelector('.modal__info__block__list')
    const selectChange = document.querySelector('.modal__info__block__select_margin')
    const selectValue = document.querySelectorAll('.modal__info__block__select')

    selectBlock.addEventListener('click', () => {
        if (arrow.getAttribute('style') == "transform: rotate(180deg);") {
            arrow.style.transform = 'rotate(0deg)'
            list.style.transform = 'translateY(-100%)'
        } else {
            arrow.style.transform = 'rotate(180deg)'
            list.style.transform = 'translateY(0)'
        }
        list.classList.toggle('active')

        selectValue.forEach((el, i) => {
            el.addEventListener('click', () => {
                selectChange.innerHTML = el.textContent + '<img src="../img/dark-arrow.svg" alt="arrow">'
                
                list.classList.toggle('active')
            })
        })
    })
}

module.exports = select