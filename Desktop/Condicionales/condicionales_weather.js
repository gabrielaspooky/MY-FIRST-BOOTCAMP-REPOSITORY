// let season = prompt("Ingresa una estación")
// let season = 'spring'
// let season = 'winter'
// let season = 'fall'
// let season = 'summer'

function() askSeason
let season = document.getElementById("seasonInput").value.toLowerCase();

if(season === 'spring') {
  document.getElementById("resultado").innerTex = "It's spring! The trees are budding!";

} else if(season === 'winter') {
console.log("It's winter! Everything is covered in snow.")

  } else if(season === 'fall') {
    console.log("It's fall! Leaves are falling!")

  } else if(season === 'summer') {
console.log("It's sunny and warm because it's summer!")

  } else {
  alert('Has introducido un dato inválido');
}

