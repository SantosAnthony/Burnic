const url = 'http://192.168.18.168:3000/Register'

const form = document.getElementById('registar')
form.addEventListener('click', async (event) =>{
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const produto = { name,email, password };
  async function login() {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto),
      });

      const data = await response.json();

      if (!response.ok) {
        // Se o servidor retornou erro
        console.error('Erro no login:', data.error);
        alert(data.error || 'Erro desconhecido');
      } else {
        console.log('Login bem-sucedido:', data);
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar, salvar token, etc.
      }

    } catch (error) {
      console.error('Erro de rede ou inesperado:', error);
      alert('Erro de rede ou servidor fora do ar.');
    }
  }

  // E chame assim:
  login();
    // try {
    //   Swal.fire({
    //   text: "Login executado com sucesso!",
    //   icon: "success",
    //   width: 600,
    //   padding: "3em",
    //   color: "#716add",
    //   background: "#fff url(/images/trees.png)",
    //   backdrop: `
    //     rgba(0,0,123,0.4)
    //     url("/images/nyan-cat.gif")
    //     left top
    //     no-repeat
    //   `
    //   });
    //   setTimeout(() => {
    //     window.location.href = '/index.html';
    //   },2000)
    // } catch (error) {
    //   Swal.fire({
    //   text: "Falha ao fazer login",
    //   icon: "error",
    //   width: 600,
    //   padding: "3em",
    //   color: "#716add",
    //   background: "#fff url(/images/trees.png)",
    //   backdrop: `
    //     rgba(0,0,123,0.4)
    //     url("/images/nyan-cat.gif")
    //     left top
    //     no-repeat
    //   `
    //   });
    //   console.error(err);
    // }
})



