

const promesaResuelta = Promise.resolve(5)
console.log(promesaResuelta) // Promise { 5 }

const promesaRechazada = Promise.reject('Error')
promesaRechazada.catch(err => console.log('Promesa rechazada capturada:', err))
console.log(promesaRechazada) // Promise { <rejected>: "Error" }