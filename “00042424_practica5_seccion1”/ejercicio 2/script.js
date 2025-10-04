const carrito = {
  productos: [
    {
      nombre: "papel higienico",
      unidades: 4,
      precio: 5,
    },
    {
      nombre: "chocolate",
      unidades: 2,
      precio: 1.5,
    },
  ],
  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  },
};

let resultado = document.getElementById("resultado");

carrito.productos.forEach((p) => {
  let linea = document.createElement("p");
  linea.textContent = `${p.unidades} x ${p.nombre} = $${(
    p.unidades * p.precio
  ).toFixed(2)}`;
  resultado.appendChild(linea);
});

let total = document.createElement("h3");
total.textContent = `Precio total: $${carrito.precioTotal.toFixed(2)}`;
resultado.appendChild(total);
