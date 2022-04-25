const inputTitle = () => {
    const title = document.querySelectorAll('.modal__new__title')
    const change = document.querySelectorAll('#change')
    const cross = document.querySelectorAll('#cross-little')
    const tick = document.querySelectorAll('#acsess')

    title.forEach((el, i) => {
        el.disabled = true
    })

    change.forEach((el, i) => {
        el.addEventListener('click', () => {
            title[i].disabled = false
    
            change[i].style.display = 'none'
            cross[i].style.display = 'block'
            tick[i].style.display = 'block'
        })
    })
    tick.forEach((el, i) => {
        el.addEventListener('click', () => {
            title[i].disabled = true
    
            change[i].style.display = 'block'
            cross[i].style.display = 'none'
            tick[i].style.display = 'none'
        })
    })
    cross.forEach((el, i) =>{
        el.addEventListener('click', () => {
            if (i < 1) {
                title[i].setAttribute("value", "Sonar LaserScan Signature Cloud")
                title[i].value = "Sonar LaserScan Signature Cloud"
            } else {
                title[i].setAttribute("value", "Alert  LaserScan Signature Cloud")
                title[i].value = "Alert  LaserScan Signature Cloud"
            }
            title[i].disabled = true

            change[i].style.display = 'block'
            cross[i].style.display = 'none'
            tick[i].style.display = 'none'
        })
    })
}

module.exports = inputTitle