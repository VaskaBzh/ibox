const date = () => {
    const buttonOpen = document.querySelectorAll('#calendarDate')
    const buttonClose = document.querySelector('.calendar__cross')
    const buttonSubmit = document.querySelector('.calendar__button')
    let modal = document.getElementById('calendar')
    const link = document.getElementById('open-element')
    const linkTwo = document.getElementById('open-element-second')

    let dateToday = new Date()
    let output = String(dateToday.getDate()).padStart(2, '0');

    var calendar = new FullCalendar.Calendar(modal, {
      initialView: 'dayGridMonth',
      locale: 'ru'
    });
    calendar.render();

    const calendarInput = document.getElementById('date')
    calendarInput.setAttribute('autocomplete', 'off')

    let todayValue = document.querySelectorAll('.fc-daygrid-day-number')
    const todayValueBorder = document.querySelectorAll('.fc-daygrid-day-top')
    const buttonCalendar = document.querySelector('.fc-today-button')

    buttonCalendar.textContent = 'Сегодня'
    buttonCalendar.style.color = '#727883'

    let next = document.querySelector('.fc-next-button')
    let prev = document.querySelector('.fc-prev-button')
    todayValue.forEach((day, i) => {
      day.addEventListener('click', () => {
        modal.classList.remove('active')
        modal.classList.remove('active_calendar')
        calendarInput.value = day.textContent + ' ' + document.querySelector('.fc-toolbar-title').textContent
      })
      if (day.textContent == output) {
        todayValueBorder[i].style.backgroundColor = '#727883'
        day.style.color = '#fff'
      }
      next.addEventListener('click', () => {
        todayValue = document.querySelectorAll('.fc-daygrid-day-number')
        modal = document.getElementById('calendar')
        next = document.querySelector('.fc-next-button')
        prev = document.querySelector('.fc-prev-button')
        todayValue.forEach((day) => {
          day.addEventListener('click', () => {
            buttonCalendar.textContent = 'Сегодня'
            buttonCalendar.style.color = '#727883'
            day.addEventListener('click', () => {
              modal.classList.remove('active')
              modal.classList.remove('active_calendar')
              calendarInput.value = day.textContent + ' ' + document.querySelector('.fc-toolbar-title').textContent
            })
          })
        })
        buttonCalendar.textContent = 'Сегодня'
        buttonCalendar.style.color = '#727883'
      })
      prev.addEventListener('click', () => {
        todayValue = document.querySelectorAll('.fc-daygrid-day-number')
        modal = document.getElementById('calendar')
        next = document.querySelector('.fc-next-button')
        prev = document.querySelector('.fc-prev-button')
        todayValue.forEach((day) => {
          day.addEventListener('click', () => {
            buttonCalendar.textContent = 'Сегодня'
            buttonCalendar.style.color = '#727883'
            day.addEventListener('click', () => {
              modal.classList.toggle('active')
              modal.classList.toggle('active_calendar')
              calendarInput.value = day.textContent + ' ' + document.querySelector('.fc-toolbar-title').textContent
            })
          })
        })
      buttonCalendar.textContent = 'Сегодня'
      buttonCalendar.style.color = '#727883'
    })
  })

    const modalToggle = () => {
        modal.classList.toggle('active')
        modal.classList.toggle('active_calendar')
    }

    calendarInput.addEventListener('click', modalToggle)

    buttonClose.addEventListener('click', modalToggle)
    buttonOpen.forEach((btn, index) => {
        btn.addEventListener('click', modalToggle)
        btn.addEventListener('click', () => {
            buttonClose.addEventListener('click', modalToggle)
            if (index < 1) {
                buttonSubmit.addEventListener('click', () => {
                    link.click()
                })
            } else if (index = 1) {
                buttonSubmit.addEventListener('click', () => {
                    linkTwo.click()
                })
            }
        })
    })
}

module.exports = date