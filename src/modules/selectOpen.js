const select = ()=> {
    const list = document.querySelector('.modal__info__block__list')
    const selectChange = document.querySelector('.modal__info__block__select_margin')
    const selectValue = document.querySelectorAll('.modal__info__block__select')

    selectChange.addEventListener('click', () => {
        const arrow = document.querySelector('.modal__info__block__select img')
        const arrowRotate = () => {
            if (arrow.getAttribute('style') == "transform: rotate(180deg);") {
                arrow.style.transform = 'rotate(0deg)'
                list.style.transform = 'translateY(-100%)'
            } else {
                arrow.style.transform = 'rotate(180deg)'
                list.style.transform = 'translateY(0)'
            }
        }
        arrowRotate()

        list.classList.toggle('active')

        selectValue.forEach((el, i) => {
            if (i > 1) {
            el.addEventListener('click', () => {
                selectChange.innerHTML = el.textContent + '<img src="../img/dark-arrow.svg" alt="arrow" style="transform: rotate(0deg);">'
                
                list.classList.toggle('active')
                arrowRotate()
            })
        }
        })
    })
}

module.exports = select