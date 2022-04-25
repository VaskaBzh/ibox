const back = () => {
    const backLink = document.getElementById('main')
    const backButton = document.getElementById('back-to-main')

    backButton.addEventListener('click', () => {
        backLink.click()
    })
}

module.exports = back