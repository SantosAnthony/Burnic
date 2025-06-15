


if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}

function start() {
  const hamburguer = document.querySelector('.hamburger input');
  
  const change = document.querySelector('.change');
  const links = document.querySelector('.links');
  const cartShop = document.querySelector('.cartShop');
  const menu = document.getElementsByClassName
  
  const elemn = {
    body:document.getElementById('ibody'),
    menu:document.querySelector('.menu'),
    line:document.querySelectorAll('.line'),
    name:document.querySelectorAll('.name'),
    price:document.querySelectorAll('.price'),
    check:document.querySelector('.checkbox'),
    menuButtun:document.getElementById('menuButtun'),
    link:document.querySelectorAll('.link'),
    cart:document.querySelector('.cart input'),
  }
  
  
  
  hamburguer.addEventListener('click', () => {
    if(hamburguer.checked) {
      links.style.right = '0px';
      cartShop.style.right = '-600px';
      change.style.display = 'block';
      elemn.cart.checked = false
    } else {
      links.style.right = '-600px';
      change.style.display = 'none';
    }
  });
  
  elemn.cart.addEventListener('click', () => {
    let back = document.querySelector('main')
    if(elemn.cart.checked) {
      cartShop.style.right = '0px';
      links.style.right = '-600px';
      back.style.filter = 'blur(5px)';
      hamburguer.checked = false
      change.style.display = 'none';
      
    } else {
      cartShop.style.right = '-600px';
      back.style.filter = 'blur(0)';
    }
  });
  
  elemn.check.addEventListener('click', () => {
    if(elemn.check.checked) {
      elemn.body.style.backgroundColor = 'rgb(0, 0, 0)';
      elemn.menu.style.backgroundColor = 'rgb(0, 0, 0)';
      elemn.menu.style.borderBottom = '1px solid rgb(255, 255, 255)';
      elemn.menuButtun.style.color = 'rgb(255, 255, 255)';
      elemn.cart.style.color = 'rgb(255, 255, 255)';
      for(let i = 0; i < elemn.line.length; i++){
        elemn.line[i].style.stroke = 'rgb(255, 255, 255)';
      }
      for(let i = 0; i < elemn.name.length; i++){
        elemn.name[i].style.color = 'rgb(255, 255, 255)';
        elemn.price[i].style.color = 'rgb(255, 255, 255)';
      }
      links.style.backgroundColor = 'rgb(0, 0, 0)';
      for(let i = 0; i < elemn.link.length; i++){
        elemn.link[i].style.color = 'rgb(255, 255, 255)';
      }
    }else{
      elemn.body.style.backgroundColor = 'rgb(255, 255, 255)';
      elemn.menu.style.backgroundColor = 'rgb(255, 255, 255)';
      elemn.menu.style.borderBottom = '1px solid rgb(0, 0, 0)';
      elemn.menuButtun.style.color = 'rgb(0, 0, 0)';
      elemn.cart.style.color = 'rgb(0, 0, 0)';
  
      for(let i = 0; i < elemn.line.length; i++){
        elemn.line[i].style.stroke = 'rgb(0, 0, 0)';
      }
      for(let i = 0; i < elemn.name.length; i++){
        elemn.name[i].style.color = 'rgb(0, 0, 0)';
        elemn.price[i].style.color = 'rgb(0, 0, 0)';
      }
      links.style.backgroundColor = 'rgb(255, 255, 255)';
      for(let i = 0; i < elemn.link.length; i++){
        elemn.link[i].style.color = 'rgb(0, 0, 0)';
      }
    }
  });
  
  document.addEventListener('click', (e) => {
  if (e.target && e.target.matches('.button-cart')) {
    console.log(urlParams.get('id'))
  }
});
  
  const deletItem = document.getElementsByClassName("delet-item");
  for (let i = 0; i < deletItem.length; i++) {
    deletItem[i].addEventListener("click", (event) => {
      const item = event.target.closest("li");
      item.classList.add("shrinking");
      console.log("oi")
      
      setTimeout(() => {
        item.remove()
        getTotalAmount();
      }, 500);
      
      
    });
  }
  
  function getTotalAmount() {
    
    let totalAmount = 0;
    const priceItem = document.getElementsByClassName("price");
    for (let i = 0; i < priceItem.length; i++) {
      const value = parseFloat(priceItem[i].innerText.replace("R$", ""));
      totalAmount += value;
  
    }
    document.querySelector(".total-amount").innerText = `R$ ${totalAmount}.00`
  }
  
  getTotalAmount()
  
}





