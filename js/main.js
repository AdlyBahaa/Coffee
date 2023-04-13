const togglebutton = document.getElementsByClassName('toggleButton')[0]
const navbarlinks = document.getElementsByClassName('navbar')[0]

togglebutton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})