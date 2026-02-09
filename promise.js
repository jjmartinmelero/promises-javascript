const promesaResuelta = Promise.resolve(5);
console.log(promesaResuelta); // Promise { 5 }

const promesaRechazada = Promise.reject("Error");
promesaRechazada.catch((err) =>
  console.log("Promesa rechazada capturada:", err),
);
console.log(promesaRechazada); // Promise { <rejected>: "Error" }

// Example to create a promise
function promiseFriendship() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      resolve("I am your friend !");
    } else {
      reject(new Error("I am not your friend :("));
    }
  });
}

const response = promiseFriendship();

response.then((res) => console.log(res)).catch((error) => console.error(error));
