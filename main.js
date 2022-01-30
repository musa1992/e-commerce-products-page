let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('navigation');
let closeBtn = document.getElementById('close-btn');
let overlay = document.querySelector('.overlay')
let lightBox = document.querySelector('.light-box')
let previousBtn = document.getElementById('icon-previous')
let nextBtn = document.getElementById('icon-next')
let cartIcon = document.getElementById('cart')
let cartBasket = document.getElementById('cart-basket')
let productCarousel = document.querySelector('.product-image-container')
let productSection = document.querySelector('.product-image-section')
let productImages = Array.from(productCarousel.children)
let counter = document.querySelector('.counter')
let count = document.querySelector('.count')
let width = productCarousel.clientWidth
let leftFactor = productCarousel.getClientRects()[0].left
const header = document.querySelector('header')
const addToCart = document.querySelector('.add-to-cart')
let countItems = document.querySelector('.items-count-wrapper')
const productPrice = document.getElementById('price').textContent;
const productName = document.getElementById('product-name').textContent
const productImageUrl = document.getElementById('cart-product-thumbnail').getAttribute("src")

const cartTemplate = document.getElementById('cart-template')

const cartItemSection = document.querySelector('.cart-items-section')



menuIcon.addEventListener('click',()=>{
    menu.style.left = "0"
    overlay.style.display = "block"

})

closeBtn.addEventListener('click', ()=>{
    menu.style.left = "-80%"
    overlay.style.display = "none"
})


cart.addEventListener('click',()=>{

    let top = header.getClientRects()[0].bottom
    
    if(cartBasket.getClientRects()[0].top == -300){
        cartBasket.style.top = (top + 10 )+"px"
    }else {
        cartBasket.style.top = "-300px"
    }
    
   
})
nextBtn.addEventListener('click',()=>{
    previousBtn.style.visibility ="visible"
    let leftPos = productCarousel.getClientRects()[0].left
    productCarousel.style.left = ((-1 * width) + leftPos )-leftFactor  + "px"
    
    let end = (((productCarousel.childElementCount - 3)* width)-leftFactor)*-1
    if (leftPos < end){
        nextBtn.style.visibility = "hidden"
    }

})

previousBtn.addEventListener('click',()=>{
    nextBtn.style.visibility = "visible"
    let x= productCarousel.getClientRects()[0].left + width
    productCarousel.style.left = (x-leftFactor) +"px"
    let end = (((productCarousel.childElementCount - 3)* width)-leftFactor)*-1
   
    if (x > end){
        previousBtn.style.visibility = "hidden"
    }

})

counter.addEventListener('click',(e)=>{
    let items = parseInt(count.textContent)
    if (e.target.classList.contains('plus')){
        items += 1
        count.textContent = items
    }else if (e.target.classList.contains('minus')){
        items -= 1
        if (items == 0){
            items = 1
        }
        count.textContent = items
    }   
})

const userCart =(()=>{
    let items = []
    let cartItem = {}
    const addItem = (item,quantity)=>{
        cartItem.item = item
        cartItem.quantity = quantity
        items.push(cartItem)
    }

    const listItems = ()=>{
        return items
    }

    return {addItem, listItems}
})();

const productFactory = (productName,price,imageUrl)=>{
    return {productName, price, imageUrl}
}

addToCart.addEventListener('click',()=>{
    countItems.textContent = count.textContent
    countItems.style.visibility ="visible"

    let product = productFactory(productName,productPrice,productImageUrl)
    userCart.addItem(product,count.textContent)

    const item = cartTemplate.content.cloneNode(true).children[0]
    const img = item.querySelector('.img-thumbnail')
    const name = item.querySelector('.cart-product-name')
    const quantity = item.querySelector('.qty-amnt')

    userCart.listItems().forEach(element => {
        img.setAttribute("src",element.item.imageUrl)
        name.textContent = element.item.productName
        let price = (element.item.price).split("$")
        price = price[1]
        totalPrice = parseInt(price) * parseInt(element.quantity)
        quantity.textContent = `${element.item.price} x ${element.quantity} ${totalPrice}.00`
    
    })
    cartItemSection.append(item)


})

productCarousel.addEventListener('click',(e)=>{
    
    // let container = overlay.querySelector('.overlay-container')
    // container.append(productSection)
    lightBox.style.display = "block"
})


