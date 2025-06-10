async function CargarProducto() {
  const a = await axios.get("http://localhost:8000/tienda/api/Producto/");

  let n = a.data.length > 5 ? 5 : a.data.length;
  let string = `<h6 class="text-info">Últimos ${n} productos</h6>`;

  a.data.slice(0, 5).forEach((e) => {
    string += `<div class="border-bottom"><h5 class="mb-0">${e.nombre}</h5><p class="mb-0"> <span class="text-secondary">${e.categoria}</span> | ${e.descripcion} </p> <h6 class="text-align-end text-success fs-6">USD ${e.precio}</h6></div>`;
  });

  if (n > 0) {
    document.querySelector("#Lista-Clientes").innerHTML = string;
  }
}
CargarProducto();

// Preview
// Preview Nombre
document.querySelector("#name-input").addEventListener("keyup", (e) => {
  document.querySelector("#Nombre-Preview").textContent =
    document.querySelector("#name-input").value
      ? document.querySelector("#name-input").value
      : "Nombre";
});

// Preview Categoría
document.querySelector("#categoria-input").addEventListener("keyup", (e) => {
  document.querySelector("#Categoria-Preview").textContent =
    document.querySelector("#categoria-input").value
      ? document.querySelector("#categoria-input").value
      : "Categoría";
});

// Preview Precio
document.querySelector("#precio-input").addEventListener("keyup", (e) => {
  document.querySelector("#Precio-Preview").textContent =
    document.querySelector("#precio-input").value
      ? "USD " + document.querySelector("#precio-input").value
      : "Gratis";
});

// Preview Descripción
document.querySelector("#descripcion-input").addEventListener("keyup", (e) => {
  document.querySelector("#Descripcion-Preview").textContent =
    document.querySelector("#descripcion-input").value
      ? document.querySelector("#descripcion-input").value
      : "Descripción";
});

// Registrar Cliente
document.querySelector("#Registro-Producto").addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(document.querySelector("#Registro-Producto"));
  axios.post("http://localhost:8000/tienda/api/Producto/", data);
});
