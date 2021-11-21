
//navigation menu


const menuIcon = document.querySelector('.menu');
const navBackground = document.querySelector('.nav-background');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close-icon');
menuIcon.addEventListener('click', () =>{
  navBackground.classList.toggle('active');
});
close.addEventListener('click',()=>{
    navBackground.classList.remove('active');
    
});


//image change menu
const rightclick = document.querySelector('.right-click');
const product = document.querySelector('.product-1');
const leftClick = document.querySelector('.left-click');

const images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];

let i =0;
leftClick.addEventListener('click', ()=>{
    if(i <= 0) i=images.length;
    i--;
    return setImag();
    
})

//image changer

rightclick.addEventListener('click',()=>{
  if(i>= images.length - 1) i = -1;
  i++;
 return setImag();
   
});
function setImag() {
    return product.setAttribute('src', images[i])
}

//cartIcon click show no. of purhase shoes
const cartIcon = document.querySelector('.cart-icon');
const hover = document.querySelector('.hover');

cartIcon.addEventListener('click',()=>{
    hover.classList.toggle('show');
    cartIcon.classList.toggle('color');
});



//how many shoes purchase

const negative = document.querySelector('.negative');
const postive = document.querySelector('#postive');
const numberCount = document.querySelector('input');

postive.addEventListener('click', () =>{
    numberCount.value++;
});
negative.addEventListener('click',()=>{
  if(numberCount.value === 0){
      return 0;
  }else if(numberCount.value >1){
      numberCount.value--;
      
  }
});


//number product purchase notifi

const round = document.querySelector('.notifi');
const numberPurchase = document.getElementById('notifi');
const buttonCart = document.querySelector('.cart');

buttonCart.addEventListener('click',()=>{
    let seeValue= numberCount.value;
    round.style.display = 'block';
    numberPurchase.textContent = seeValue;
});

