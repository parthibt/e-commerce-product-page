//full display image

const product = document.querySelector('.product-1');


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

const leftClick = document.querySelector('.left-click');

const images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];

let i =0;
leftClick.addEventListener('click', ()=>{
    if(i <= 0) i=images.length;
    i--;
    return setImag();
    
});

rightclick.addEventListener('click',()=>{
  if(i>= images.length - 1) i = -1;
  i++;
 return setImag();
   
});
function setImag() {
    return product.setAttribute('src', images[i])
}

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const opacity0 = document.getElementById('opacity');
const opacity1 = document.getElementById('opacity1');
const opacity2 = document.getElementById('opacity2');
const opacity3 = document.getElementById('opacity3');

a.addEventListener('click',()=>{
    product.setAttribute('src',images[0]);
    a.classList.toggle('thum-border');
        b.classList.remove('thum-border');
        c.classList.remove('thum-border');
        d.classList.remove('thum-border');


        opacity0.classList.add('opacity');
        opacity1.classList.remove('opacity');
        opacity2.classList.remove('opacity');
        opacity3.classList.remove('opacity');

});
b.addEventListener('click',()=>{
    product.setAttribute('src',images[1]);
    b.classList.toggle('thum-border');
    a.classList.remove('thum-border');
    c.classList.remove('thum-border');
    d.classList.remove('thum-border');

    opacity1.classList.add('opacity');
    opacity0.classList.remove('opacity');
    opacity2.classList.remove('opacity');
    opacity3.classList.remove('opacity');

});
c.addEventListener('click',()=>{
    product.setAttribute('src',images[2]);
    c.classList.toggle('thum-border');
    b.classList.remove('thum-border');
    a.classList.remove('thum-border');
    d.classList.remove('thum-border');

    opacity2.classList.add('opacity');
    opacity1.classList.remove('opacity');
    opacity0.classList.remove('opacity');
    opacity3.classList.remove('opacity');

});
d.addEventListener('click',()=>{
    product.setAttribute('src',images[3]);
    d.classList.toggle('thum-border');

    b.classList.remove('thum-border');
    c.classList.remove('thum-border');
    a.classList.remove('thum-border');

    opacity3.classList.add('opacity');
    opacity1.classList.remove('opacity');
    opacity2.classList.remove('opacity');
    opacity0.classList.remove('opacity');

});

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
const yourText = document.querySelector('.your-text');
const showItems = document.getElementById('show-items');
const totalPrice = document.querySelector('.total');
const amount = document.querySelector('.amount');

buttonCart.addEventListener('click',()=>{
    let seeValue= numberCount.value;
    round.style.display = 'block';
    numberPurchase.textContent = seeValue;
    yourText.style.display = 'none';
    showItems.style.visibility ='visible';
    
    let product = `$125 x ${seeValue}`;
     
    let amountProduct = 125 * seeValue;
    let amountValue = `$${amountProduct}`;
    
    totalPrice.textContent = product;
    amount.textContent = amountValue;



});


//delete the items

const deleteItmes = document.querySelector('.delete');
deleteItmes.addEventListener('click',()=>{
    showItems.style.visibility = 'hidden';
    round.style.display = 'none';
    yourText.style.display = 'block';

});

