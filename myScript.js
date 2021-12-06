//full display image
const product = document.querySelector('.product-1');
const copyArea = document.querySelector('.copy');
const copyClose = document.querySelector('.close-area')
;
function copyDiv(){
    copyArea.style.display = 'block'; 

}
function closeArea(){
    copyArea.style.display = 'none';
}
product.addEventListener('click',copyDiv);
copyClose.addEventListener('click',closeArea);



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

//another change image
const nextImg1 = document.querySelector('.next-img1');
const nextImg2 = document.querySelector('.next-img2');
const bigImg = document.querySelector('.big-img');
const white1Color = document.querySelector('.white1'); 
const white2Color = document.querySelector('.white2'); 
const white3Color = document.querySelector('.white3'); 
const white4Color = document.querySelector('.white4'); 
nextImg1.addEventListener('click', ()=>{
    if(i <= 0) i=images.length;
    i--;
    return setBig();
    
});

nextImg2.addEventListener('click',()=>{
  if(i>= images.length - 1) i = -1;
  i++;
 return setBig();
   
});
function setBig() {
    if(images[i] == "images/image-product-1.jpg"){
        white1Color.classList.add('copy-white');

        white2Color.classList.remove('copy-white');
        white3Color.classList.remove('copy-white');
        white4Color.classList.remove('copy-white');
    }else if(images[i] == "images/image-product-2.jpg"){
        white2Color.classList.add('copy-white');

        white1Color.classList.remove('copy-white');
        white3Color.classList.remove('copy-white');
        white4Color.classList.remove('copy-white');
    }else if(images[i] == "images/image-product-3.jpg"){
        white3Color.classList.add('copy-white');

        white1Color.classList.remove('copy-white');
        white2Color.classList.remove('copy-white');
        white4Color.classList.remove('copy-white');
    }else if(images[i] == "images/image-product-4.jpg"){
        white4Color.classList.add('copy-white');

        white1Color.classList.remove('copy-white');
        white3Color.classList.remove('copy-white');
        white2Color.classList.remove('copy-white');
    }
    return bigImg.setAttribute('src', images[i]);

     
}
  
function updtateColorBorder(){
    if(images[i] == "images/image-product-1.jpg"){
        white1Color.classList.add('copy-white');

        white2Color.classList.remove('copy-white');
        white3Color.classList.remove('copy-white');
        white4Color.classList.remove('copy-white');
    }
    
}
updtateColorBorder();

  




//desktop image
const a = document.querySelector('.color-white');
const b = document.querySelector('.color-white1');
const c = document.querySelector('.color-white2');
const d = document.querySelector('.color-white3');
if(images[i] == "images/image-product-1.jpg"){
    a.classList.toggle('thum-border');
    a.classList.toggle('opacity');
    //remove the toggle other img
    b.classList.remove('thum-border');
    b.classList.remove('opacity');
    c.classList.remove('thum-border');
    c.classList.remove('opacity');
    d.classList.remove('thum-border');
    d.classList.remove('opacity');

}
function updateA(){
    product.setAttribute('src',images[0]);

    a.classList.toggle('thum-border');
    a.classList.toggle('opacity');
    //remove the toggle other img
    b.classList.remove('thum-border');
    b.classList.remove('opacity');
    c.classList.remove('thum-border');
    c.classList.remove('opacity');
    d.classList.remove('thum-border');
    d.classList.remove('opacity');
}
function updateB(){
    product.setAttribute('src',images[1]);

    b.classList.toggle('thum-border');
    b.classList.toggle('opacity');
    //remove the toggle other img
    a.classList.remove('thum-border');
    a.classList.remove('opacity');
    c.classList.remove('thum-border');
    c.classList.remove('opacity');
    d.classList.remove('thum-border');
    d.classList.remove('opacity');
}
function updateC(){
    product.setAttribute('src',images[2]);

    c.classList.toggle('thum-border');
    c.classList.toggle('opacity');
    //remove the toggle other img
    a.classList.remove('thum-border');
    a.classList.remove('opacity');
    b.classList.remove('thum-border');
    b.classList.remove('opacity');
    d.classList.remove('thum-border');
    d.classList.remove('opacity');
}
function updateD(){
    product.setAttribute('src',images[3]);

    d.classList.toggle('thum-border');
    d.classList.toggle('opacity');
    //remove the toggle other img
    a.classList.remove('thum-border');
    a.classList.remove('opacity');
    c.classList.remove('thum-border');
    c.classList.remove('opacity');
    b.classList.remove('thum-border');
    b.classList.remove('opacity');
}

a.addEventListener('click',updateA);
b.addEventListener('click',updateB);
c.addEventListener('click',updateC);
d.addEventListener('click',updateD);



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

