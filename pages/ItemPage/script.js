const url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get('id');
const search = `https://server-burnic.onrender.com/produtos/${id}`

const loading = document.querySelector('.loading')

// setTimeout(() => {
//   loading.style.display = 'none';
// },1000)

// const lista = document.querySelector('.container');

// switch(id){
//   case "1":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/Baphomet.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic baphomet</h1>
//           <h2>R$150.00<s>R$600.00</s></h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="1">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "2":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/aleeeeeeee.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic aleeeeeeee</h1>
//           <h2>R$150.00<s>R$600.00</s></h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="2">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "3":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/bigtoddy.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic bigtoddy</h1>
//           <h2>R$150.00</h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="3">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "4":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/Haddad.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic haddad</h1>
//           <h2>R$150.00</h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="4">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "5":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/Suquita.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic suquita</h1>
//           <h2>R$150.00</h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="5">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "6":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/Risadinha.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic Risadinha</h1>
//           <h2>R$150.00</h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="6">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "7":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/Pipoca.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic Pipoca</h1>
//           <h2>R$150.00</h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="7">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   case "8":
//     lista.innerHTML = `
//       <div class="produto">
//         <div class="imgProduto">
//           <img src="../../imagens/boso.jpg" alt="">
//         </div>
//         <div class="produtoInfo">
//           <h1>Capa para bic Boso</h1>
//           <h2>R$150.00</h2>
//         </div>
//         <div class="buttons">
//           <button class="button-buy" data-id="8">Comprar</button>
//           <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
//         </div>
//       </div>
//     `;
//     break;
//   default:
//     console.log('Produto não encontrado');
// }






document.addEventListener('DOMContentLoaded', async () => {
  const lista = document.querySelector('.container');
  const loading = document.querySelector('.loading')


  async function carregarProdutos() {
    try {
      const res = await axios.get(search)
      const produtos = res.data

      produtos.forEach((produto) => {
        lista.innerHTML = `
          <div class="produto">
            <div class="imgProduto">
              <img src="${produto.image}" alt="">
            </div>
            <div class="produtoInfo">
              <h1>Capa para bic ${produto.name}</h1>
              ${produto.promo ? `<h2>R$${produto.promoPrice}.00<s>R$${produto.price}.00</s></h2>` : `<h2>R$${produto.price}.00</h2>`}
            </div>
            <div class="buttons">
            ${produto.class == "sale" ? `<button class="button-buy" data-id="${produto.id}" >Comprar</button>` : `<button class="button-buy disabled" disabled data-id="${produto.id}" >Comprar</button>`}
              <button class="button-cart"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        `;
      });
      const buttonBuy = document.querySelector('.button-buy');
      if (buttonBuy) {
        buttonBuy.addEventListener('click', () => {
          const productId = buttonBuy.getAttribute('data-id');
          window.location.href = `../../pages/FinishBuy/index.html?id=${productId}`;
          loading.style.display = 'flex';
        });
      }



      
      
      
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
    loading.style.display = 'none';
  })
})