const url = 'http://192.168.18.168:3000/produtos'
const params = new URLSearchParams(window.location.search);
const productId = params.get('id')

const loading = document.querySelector('.loading')

setTimeout(() => {
  loading.style.display = 'none';
},500)

const imagemInput = document.getElementById('imagem');
  const preview = document.getElementById('preview');

  imagemInput.addEventListener('change', () => {
    const file = imagemInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        preview.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });




if(productId){

  async function giveItem() {
    const res = await axios.get(url + `/${productId}`)
    const produto = res.data

    produto.forEach(pr => {
      document.getElementById('name').value = pr.name
      document.getElementById('price').value = pr.price
      document.getElementById('promoPrice').value = pr.promoPrice
      document.getElementById('promo').checked = pr.promo
      document.getElementById('classe').value = pr.class 
      document.getElementById('preview').src = pr.image
    });
  }

  giveItem()

  let button = document.getElementById('enviar')
  button.innerText = 'Editar'

  button.addEventListener('click', async () => {

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const promoPrice = parseFloat(document.getElementById('promoPrice').value);
    const promo = document.getElementById('promo').checked;
    const classe = document.getElementById('classe').value;
    const image = preview.src;
  
    const produto = { name, price, promoPrice, promo, classe, image };

    async function edit(){
      const res = await fetch(`http://192.168.18.168:3000/produtos/${productId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
      });

      return res
    }

    edit()
    try {
      Swal.fire({
      text: "Produto editado com sucesso!",
      icon: "success",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      setTimeout(() => {
        window.location.href = './ListaDeBics.html';
      },2000)
    } catch (error) {
      Swal.fire({
      text: "Falha ao editar o produto",
      icon: "error",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      console.error(err);
    }

  });


  
}

else{
  document.getElementById('enviar').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const promoPrice = parseFloat(document.getElementById('promoPrice').value);
    const promo = document.getElementById('promo').checked;
    const classe = document.getElementById('classe').value;
    const image = preview.src;

    const produto = { name, price, promoPrice, promo, classe, image };

    const res = async () => {
      const response = await fetch('http://192.168.18.168:3000/produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto)
      });
      return response
    }
    res()
    try {
      Swal.fire({
      text: "Produto criado com sucesso!",
      icon: "success",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      setTimeout(() => {
        window.location.href = './ListaDeBics.html';
      },2000)
    } catch (error) {
      Swal.fire({
      text: "Falha ao criar o produto",
      icon: "error",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      console.error(err);
    }
  });
}

