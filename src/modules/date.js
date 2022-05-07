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
    let todayContains = document.querySelectorAll('.fc-daygrid-day')
    const todayValueBorder = document.querySelectorAll('.fc-daygrid-day-top')
    const buttonCalendar = document.querySelector('.fc-today-button')
    const mounthValue = document.querySelector('.fc-toolbar-title')

    buttonCalendar.textContent = 'Сегодня'
    buttonCalendar.style.color = '#727883'
    buttonCalendar.removeAttribute('disabled')
    buttonCalendar.setAttribute('title', 'Сегодня')

    const reInitDates = () => {
      todayValue = document.querySelectorAll('.fc-daygrid-day-number')
        modal = document.getElementById('calendar')
        next = document.querySelector('.fc-next-button')
        prev = document.querySelector('.fc-prev-button')
        todayValue.forEach((day) => {
          day.addEventListener('click', () => {
            buttonCalendar.textContent = 'Сегодня'
            buttonCalendar.style.color = '#727883'
            buttonCalendar.disabled = 'false'
            buttonCalendar.setAttribute('title', 'Сегодня')
            day.addEventListener('click', () => {
              modal.classList.remove('active')
              modal.classList.remove('active_calendar')
              calendarInput.value = day.textContent + ' ' + mounthValue.textContent
            })
          })
        })
        buttonCalendar.textContent = 'Сегодня'
        buttonCalendar.style.color = '#727883'
        buttonCalendar.removeAttribute('disabled')
        buttonCalendar.setAttribute('title', 'Сегодня')
    }

    let next = document.querySelector('.fc-next-button')
    let prev = document.querySelector('.fc-prev-button')

    todayValue.forEach((day, i) => {
      day.addEventListener('click', () => {
        modal.classList.remove('active')
        modal.classList.remove('active_calendar')
        calendarInput.value = day.textContent + ' ' + document.querySelector('.fc-toolbar-title').textContent
      })
      // bug выделяется две даты, с нужным textContent
      if (day.textContent == output && !todayContains[i].classList.contains('fc-day-other') && day.textContent > 10) {
        todayValueBorder[i].style.backgroundColor = '#727883'
        day.style.color = '#fff'
      } else if (day.textContent == String(output).slice(1) && !todayContains[i].classList.contains('fc-day-other') && day.textContent < 10) {
        todayValueBorder[i].style.backgroundColor = '#727883'
        day.style.color = '#fff'
      }
      
      buttonCalendar.addEventListener('click', () => {
        modal.classList.remove('active')
        modal.classList.remove('active_calendar')
        calendarInput.value = output + ' ' + mounthValue.textContent
        buttonCalendar.textContent = 'Сегодня'
      })
      next.addEventListener('click', reInitDates)
      prev.addEventListener('click', reInitDates)
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