const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

console.log("Elementos de tipo número:");

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "number") {
    console.log(arreglo[i]);
  }
}
