let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('navigation');
let closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click',()=>{
    menu.style.left = "0"
})

closeBtn.addEventListener('click', ()=>{
    menu.style.left = "-80%"
})
