let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('navigation');
let closeBtn = document.getElementById('close-btn');
let overlay = document.querySelector('.overlay')
let previousBtn = document.getElementById('icon-previous')
let nextBtn = document.getElementById('icon-next')
let productCarousel = document.querySelector('.product-image-container')
let productImages = Array.from(productCarousel.children)
let width = productCarousel.clientWidth

let leftFactor = productCarousel.getClientRects()[0].left
menuIcon.addEventListener('click',()=>{
    menu.style.left = "0"
    overlay.style.display = "block"

})

closeBtn.addEventListener('click', ()=>{
    menu.style.left = "-80%"
    overlay.style.display = "none"
})
nextBtn.addEventListener('click',()=>{
    let leftPos = productCarousel.getClientRects()[0].left
    productCarousel.style.left = ((-1 * width) + leftPos )-leftFactor  + "px"
})

previousBtn.addEventListener('click',()=>{
    let x = productCarousel.getClientRects()[0].left + width
    productCarousel.style.left = (x-leftFactor) +"px"
})
