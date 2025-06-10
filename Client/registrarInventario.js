// Crear Select
async function CargarProducto() {
  const a = await axios.get("http://localhost:8000/tienda/api/Producto/");

  let string = "";
  let b = a.data[0].nombre;

  a.data.forEach((e) => {
    string += `<option value="${e.id}" data-nombreproducto="${e.nombre}">${e.nombre}</option>`;
  });

  if (a.data.length > 0) {
    document.querySelector("#Producto-Input").innerHTML = string;

    document.querySelector("#Producto-Preview").textContent = b;
  } else {
    document.querySelector("#Producto-Input").setAttribute("disabled", "true");
  }
}
CargarProducto();

// Enlistar Inventarios
async function CargarInventario() {
  const a = await axios.get("http://localhost:8000/tienda/api/Inventario/");

  let n = a.data.length > 5 ? 5 : a.data.length;
  let string = `<h6 class="text-info">Últimos ${n} inventarios</h6>`;

  for (const b of a.data.slice(0, 5)) {
    const c = await axios.get(
      `http://localhost:8000/tienda/api/Producto/${b.producto}/`
    );
    string += `<div class="border-bottom m-1"><h5 class="mb-0">${c.data.nombre}</h5><p class="mb-0"> <span class="text-secondary">${b.checkin} | Stock: ${b.stock} </span></p>`;
  }

  if (n > 0) {
    document.querySelector("#Lista-Inventarios").innerHTML = string;
  }
}
CargarInventario();

// Preview
// Preview Producto
document.querySelector("#Producto-Input").addEventListener("change", (e) => {
  let selectedOption = e.target.options[e.target.selectedIndex];

  document.querySelector("#Producto-Preview").textContent =
    selectedOption.dataset.nombreproducto;
});

// Preview Stock
document.querySelector("#date-input").addEventListener("change", (e) => {
  document.querySelector("#Checkin-Preview").textContent =
    document.querySelector("#date-input").value;
});

// Preview Stock
document.querySelector("#stock-input").addEventListener("keyup", (e) => {
  document.querySelector("#Stock-Preview").textContent = document.querySelector(
    "#stock-input"
  ).value
    ? document.querySelector("#stock-input").value
    : "00";
});

// Preview Descripción
document.querySelector("#obsv-input").addEventListener("keyup", (e) => {
  document.querySelector("#Observacion-Preview").textContent =
    document.querySelector("#obsv-input").value
      ? document.querySelector("#obsv-input").value
      : "Sin Observaciones.";
});

// Registrar Cliente
document
  .querySelector("#Registro-Inventario")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(document.querySelector("#Registro-Inventario"));
    axios.post("http://localhost:8000/tienda/api/Inventario/", data);
  });
