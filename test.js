const url = 'https://server-burnic.onrender.com/produtos'



document.addEventListener('DOMContentLoaded', async () => {

  
  const lista = document.querySelector('.produtos')
  const loading = document.querySelector('.loading')


  async function carregarProdutos() {
    try {
      const res = await axios.get(url)
      const produtos = res.data

      produtos.forEach((produto) => {
        lista.innerHTML += `
          <li class="dobra" style="opacity: 0; transition: opacity 0.5s;">
            <a class="linkItem" href="pages/ItemPage/index.html?id=${produto.id}">
              <div class="${produto.class}">
                <div class="image" style="background-image: url('${produto.image}')">
                  <div class="${produto.class === 'sold' ? 'soldIcon' : 'saleIcon'}">
                    <p>${produto.class === 'sold' ? 'sold' : 'sale'}</p>
                  </div>
                </div>
                <p class="name">${produto.name}</p>
                ${
                  produto.promo
                    ? `<p class="price promo">R$${produto.promoPrice}.00<s>R$${produto.price}.00</s></p>`
                    : `<p class="price">R$${produto.price}.00</p>`
                }
              </div>
            </a>
          </li>
        `
        // let a = document.createElement('a');
        // let li = document.createElement('li');
        // li.classList.add('dobra');
        // let div = document.createElement('div');
        // div.classList.add(produto.class);
        // a.appendChild(div);
        // a.classList.add('linkItem');
        // a.href = `pages/ItemPage/index.html?id=${produto.id}`
        // li.appendChild(a);
        // let image = document.createElement('div');
        // image.classList.add('image');
        // image.style.backgroundImage = `url(${produto.image})`;
        // div.appendChild(image);
        // let name = document.createElement('p');
        // name.classList.add('name');
        // name.innerHTML = produto.name;
        // div.appendChild(name);
        // lista.appendChild(li);
        // if(produto.class === 'sold'){
        //   let soldIcon = document.createElement('div');
        //   soldIcon.classList.add('soldIcon');
        //   let p = document.createElement('p');
        //   p.innerHTML = 'sold';
        //   soldIcon.appendChild(p);
        //   image.appendChild(soldIcon);
        // }
        // else{
        //   let saleIcon = document.createElement('div');
        //   saleIcon.classList.add('saleIcon');
        //   let p = document.createElement('p');
        //   p.innerHTML = 'sale';
        //   saleIcon.appendChild(p);
        //   image.appendChild(saleIcon);
        // }
        // if(produto.promo){
        //   let pricePromo = document.createElement('p');
        //   pricePromo.classList.add('price');
        //   pricePromo.classList.add('promo');
        //   pricePromo.innerHTML = `R$${produto.promoPrice}.00<s>R$${produto.price}.00</s>`;
        //   div.appendChild(pricePromo);
        // }
        // else{
        //   let price = document.createElement('p');
        //   price.classList.add('price');
        //   price.innerHTML = `R$${produto.price}.00`;
        //   div.appendChild(price);
        // }
      })
      setTimeout(() => {
          document.querySelectorAll('.dobra').forEach((li) => {
            li.style.opacity = 1;
          });
        }, 100);

      
    } catch (err) {
      let div = document.createElement('div');
      div.classList.add('error');
      let img = document.createElement('img');
      img.classList.add('errorImg');
      let p = document.createElement('p');
      p.classList.add('errorText');
      p.innerHTML = 'Erro ao buscar produtos';
      img.src = 'imagens/error 666.png';
      div.appendChild(img);
      div.appendChild(p);
      lista.appendChild(div);
      console.error('Erro ao buscar produtos:', err)
    }
  }

  
  await carregarProdutos()
  .then(() => {
    setTimeout(() => {
      loading.style.display = 'none';
    },500)
  })
})
