const menuMobile = document.getElementById('menu-mobile')
const btnMenuMobile = document.getElementById('btn-menu-mobile')

btnMenuMobile.addEventListener('click', ()=>{
        menuMobile.classList.toggle('disable')
    })