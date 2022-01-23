let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('navigation');
let closeBtn = document.getElementById('close-btn');
let overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click',()=>{
    menu.style.left = "0"
    overlay.style.display = "block"

})

closeBtn.addEventListener('click', ()=>{
    menu.style.left = "-80%"
    overlay.style.display = "none"
})
