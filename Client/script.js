async function getAll() {
  const a = await axios.get("http://localhost:8000/tienda/api/Cliente/");
  const b = await axios.get("http://localhost:8000/tienda/api/Producto/");
  const c = await axios.get("http://localhost:8000/tienda/api/Inventario/");

  let x = "";
  a.data.forEach((e) => {
    x += `<div class="border-bottom m-1"><h5 class="mb-0">${e.nombre}</h5><p><span class="text-secondary m-0">${e.email} | +${e.phone} </span> <br /> ${e.address} </p></div>`;
  });
  if (a.data.length > 0) {
    document.querySelector("#ListaClientes").innerHTML = x;
  }

  x = "";
  b.data.forEach((e) => {
    x += `<div class="border-bottom"><h5 class="mb-0">${e.nombre}</h5><p class="mb-0"> <span class="text-secondary">${e.categoria}</span> | ${e.descripcion} </p> <h6 class="text-align-end text-success fs-6">USD ${e.precio}</h6></div>`;
  });
  if (b.data.length > 0) {
    document.querySelector("#ListaProductos").innerHTML = x;
  }

  x = "";
  for (const i of c.data) {
    const d = await axios.get(
      `http://localhost:8000/tienda/api/Producto/${i.producto}/`
    );
    string += `<div class="border-bottom m-1"><h5 class="mb-0">${d.data.nombre}</h5><p class="mb-0"> <span class="text-secondary">${i.checkin} | Stock: ${i.stock} </span></p>`;
  }
  if (c.data.length > 0) {
    document.querySelector("#ListaInventarios").innerHTML = x;
  }
}

getAll();
