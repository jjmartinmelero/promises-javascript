function getPrice(id) {
  /* Código que va a la base de datos */

  return new Promise((resolve, reject) => {
    resolve({
      name: "MacBook",
      price: 1200,
    });
  });
}

function getTaxes(precio) {
  return Promise.resolve(precio * 0.1);
}

getPrice(1000)
  .then((product) => getTaxes(product.price))
  .then((finalPrice) => console.log(finalPrice));
