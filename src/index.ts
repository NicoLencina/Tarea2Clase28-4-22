let precioProducto = document.getElementById("precioProducto");
let btnPrecio = document.getElementById("btnPrecio");

btnPrecio.addEventListener("click", () => {
  console.log(
    "El precio final es ",
    precioProducto.value - precioProducto.value * 0.1
  );
});