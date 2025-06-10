async function CargarClientes() {
  const a = await axios.get("http://localhost:8000/tienda/api/Cliente/");

  let n = a.data.length > 5 ? 5 : a.data.length;
  let string = `<h6 class="text-info">Últimos ${n} productos</h6>`;

  a.data.slice(0, 5).forEach((e) => {
    string += `<div class="border-bottom m-1"><h5 class="mb-0">${e.nombre}</h5><p><span class="text-secondary m-0">${e.email} | +${e.phone} </span> <br /> ${e.address} </p></div>`;
  });

  if (n > 0) {
    document.querySelector("#Lista-Clientes").innerHTML = string;
  }
}
CargarClientes();

// Preview
// Preview Nombre
document.querySelector("#name-input").addEventListener("keyup", (e) => {
  document.querySelector("#Nombre-Preview").textContent =
    document.querySelector("#name-input").value
      ? document.querySelector("#name-input").value
      : "Nombre";
});

// Preview Correo
document.querySelector("#email-input").addEventListener("keyup", (e) => {
  document.querySelector("#Email-Preview").textContent = document.querySelector(
    "#email-input"
  ).value
    ? document.querySelector("#email-input").value
    : "example@mail.com";
});

// Preview Teléfono
document.querySelector("#phone-input").addEventListener("keyup", (e) => {
  document.querySelector("#Phone-Preview").textContent = document.querySelector(
    "#phone-input"
  ).value
    ? "+" + document.querySelector("#phone-input").value
    : "+1234567890";
});

// Preview Dirección
document.querySelector("#address-input").addEventListener("keyup", (e) => {
  document.querySelector("#Address-Preview").textContent =
    document.querySelector("#address-input").value
      ? document.querySelector("#address-input").value
      : "Dirección";
});

// Registrar Cliente
document.querySelector("#Registro-Cliente").addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(document.querySelector("#Registro-Cliente"));
  axios.post("http://localhost:8000/tienda/api/Cliente/", data);
});
