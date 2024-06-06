const simple = document.querySelector('.simple')
const burger = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-x')

burger.addEventListener('click', () => {
    simple.style.display = 'block'
    burger.style.display = 'none'
    close.style.display = 'block'
    simple.classList.add('mobile')
})
close.addEventListener('click', () => {
    simple.style.display = 'none'
    close.style.display = 'none'
    burger.style.display = 'block'
    simple.classList.remove('mobile')
})