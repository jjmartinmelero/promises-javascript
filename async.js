async function calculateTaxes(price) {
  return price * 0.1;
}

async function start() {
  const result = await calculateTaxes(500);
  console.log(result);
}

start();

// example without then
// function process() {
//   const datos = API.leerDatos();
//   const tasasInteres = BaseDatos.leerTasas();
//   const deudores = Deudores.calcularDeuda(datos, tasasInteres);
//   return PDF.generar(deudores);
// }
