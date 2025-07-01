const url = 'https://server-burnic.onrender.com/produtos'



document.addEventListener('DOMContentLoaded', async () => {
  const lista = document.querySelector('.BicsPostados')
  const loading = document.querySelector('.loading')


  async function carregarProdutos() {
    try {
      const res = await axios.get(url)
      const produtos = res.data
      console.log(produtos)

      produtos.forEach((produto) => {
        let li = document.createElement('li');
        li.classList.add('produto');
        let img = document.createElement('img');
        img.src = produto.image;
        let div = document.createElement('div');
        div.classList.add('buttons');
        let a = document.createElement('a');
        let b = document.createElement('a');
        a.classList.add('editar');
        if (produto.id) {
          a.href = `index.html?id=${produto.id}`;
        } else {
          a.href = '#'; // ou não adiciona o link
        }
        b.classList.add('deletar');
        b.id = 'deletarId'
        a.innerHTML = 'Editar <i class="fa-solid fa-pen"></i>';
        b.innerHTML = 'Deletar <i class="fa-solid fa-trash"></i>';
        b.addEventListener('click',() => {
          const rest = async () =>{
            const res = await axios.delete(`https://server-burnic.onrender.com/produtos/${produto.id}`);
          }
          try {
            Swal.fire({
              text: "Deseja deletar o produto?",
              icon: "question",
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url(/images/trees.png)",
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `,
              showDenyButton: true,
              confirmButtonText: "Sim",
              denyButtonText: `Não`
              })
              .then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Produto deletado com sucesso", "", "success");
                rest();
                location.reload()
              } else if (result.isDenied) {
                Swal.fire("Produto não deletado", "", "info");
              }
            });
          } catch (error) {
            Swal.fire({
              text: "Falha ao deletar o produto",
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
        }
          
        )
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(a);
        div.appendChild(b);
        lista.appendChild(li);

        setTimeout(() => {
          li.style.opacity = 1;
        },1000)
      })


      
      
      
    } catch (err) {
      let div = document.createElement('div');
      div.classList.add('error');
      let img = document.createElement('img');
      img.classList.add('errorImg');
      let p = document.createElement('p');
      p.classList.add('errorText');
      p.innerHTML = 'Erro ao buscar produtos';
      img.src = '../../imagens/error 666.png';
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