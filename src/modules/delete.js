const deleteElem = () => {
 const deleteEl = document.querySelectorAll('.modal__delete')
 const buttonClose = document.getElementById('no')
 const modal = document.querySelector('.delete')
 const yes = document.getElementById('yes')
 const link = document.getElementById('back-to-tracking')
 const title = document.querySelectorAll('.modal__new__title')
 const toggled = document.querySelector('.delete__question span')

 const modalToggle = () => {
     modal.classList.toggle('active')
 }

 buttonClose.addEventListener('click', modalToggle)
 yes.addEventListener('click', () => {link.click()})

 deleteEl.forEach((elem, index) => {
     elem.addEventListener('click', modalToggle)
     elem.addEventListener('click', () => {
        toggled.textContent = title[index].value
     })
 })
}

module.exports = deleteElem