let cart = [];

document.querySelector('.cart-button').addEventListener('click', () => {
  // Mostrar el contenido del carrito
});

document.querySelectorAll('.boton').forEach((button) => {
  button.addEventListener('click', () => {
    let product = {
      name: button.parentNode.querySelector('h2').textContent,
      price: 100, // Precio del producto (cambiar por el precio real)
    };
    cart.push(product);
  });
});

document.querySelector('.total-button').addEventListener('click', () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  document.querySelector('.total-button').innerHTML = `Total: $${total.toFixed(2)}`;
});