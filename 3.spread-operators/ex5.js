const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colorCopy = [...colors]
const colorsNew = colorCopy.splice(2,1);

console.log(colorCopy)