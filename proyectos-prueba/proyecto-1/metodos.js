const btn = document.getElementsByClassName('btn-menu')[0]
const navbarItems = document.getElementsByClassName('navbar-items')[0]

btn.addEventListener('click', () => {
    navbarItems.classList.toggle('active')
})