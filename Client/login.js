async function registrar() {
  // Datos del Formulario
  const username = document.querySelector("#inputUser").value;
  const password = document.querySelector("#inputPw").value;
  const email = document.querySelector("#inputEmail").value;

  const userData = { username, password, email };

  // Envío al backend

  try {
    const response = await axios.post(
      "http://localhost:8001/registro/",
      userData
    );
    console.log("Se detuvo el redireccionamiento");

    sessionStorage.setItem("token", response.data.token);
    sessionStorage.setItem("usuario", response.data.usuario);

    console.log(sessionStorage.getItem("usuario"));
    // window.location.href = "index.html";
  } catch (error) {
    console.error(
      "Error en la petición: ",
      error.response?.data || error.message
    );
  }
}

document.querySelector("#formRegistrarse").addEventListener("submit", (e) => {
  e.preventDefault();
  registrar();
});
