let producto = document.getElementById("producto");
let btnPrecio = document.getElementById("btnPrecio");

btnPrecio.addEventListener("click", () => {
  console.log("El precio final es ", producto.value - producto.value * 0.1);
});
