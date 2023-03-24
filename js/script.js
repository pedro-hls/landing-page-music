let navIcon = document.querySelector('.hamburguer-icon')
let navOptions = document.querySelector('.nav-list-container')

navIcon.addEventListener('click', () => {
    navOptions.classList.toggle('display-menu')
})