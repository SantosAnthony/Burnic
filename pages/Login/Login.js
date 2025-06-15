const url = 'http://192.168.18.168:3000/Login'

const show = document.querySelector('.show-icon')
const eye = document.querySelector('.eye-img')

const passwordInput = document.querySelector('input[type="password"]')
show.addEventListener('click', () => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
  show.classList.toggle('fa-eye')
  show.classList.toggle('fa-eye-slash')
})

const btnEntrar = document.getElementById('entrar');

btnEntrar.addEventListener('click', async () => {
  const email = document.getElementById('iemail').value;
  const password = document.getElementById('ipassword').value;

  if (!email || !password) {
    alert('Preencha todos os campos');
    return;
  }

  const url = 'http://localhost:3000/login'; // ou sua URL real

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || 'Erro ao fazer login');
      console.error(data);
    } else {
      alert('Login realizado com sucesso!');
      console.log(data);

      // Aqui você pode redirecionar para outra página, por exemplo:
      // window.location.href = "/dashboard.html";
    }

  } catch (err) {
    console.error('Erro na rede:', err);
    alert('Erro de rede ou servidor offline');
  }

  const result = await response.json()
  if(result.user){
    Swal.fire({
    text: "Login executado com sucesso!",
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
    })
    setTimeout(() => {
      window.location.href = '/index.html';
    },2000)
  }

  if(result.error === "Invalid email or password"){
    Swal.fire({
    text: "Email ou senha inválidos",
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
  }






  
    // try{
    //   if(res().sucesso == true){
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
    //   })
    //   setTimeout(() => {
    //     window.location.href = '/index.html';
    //   },2000)
    // }
    // if(res().sucesso == false){
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
    //  }
    // }catch(error){
    //   console.log(error)
    // }
})