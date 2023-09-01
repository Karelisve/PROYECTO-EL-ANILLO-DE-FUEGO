//PÁGINA HISTORIAS

let leyendasArray = [];
let indiceActual = 0;

//obtener elementos del DOM
function leyendas(leyenda) {
  document.querySelector('#titulo').textContent = leyenda.name;
  document.querySelector('#contenido').textContent = leyenda.contenido;
  document.querySelector('#imagen').setAttribute('src', leyenda.imagen);
}

//Se obtiene el archivo JSON
async function traerHistoria() {
  try {
    const res = await fetch("../data/leyendas.json");
    const data = await res.json();
    leyendasArray = data;

    // Ordenadas alfabéticamente por el atributo 'name'
    leyendasArray.sort((a, b) => a.name.localeCompare(b.name));

    leyendas(leyendasArray[indiceActual]);

    const botonMostrar = document.querySelector('#botonMostrar');
    botonMostrar.addEventListener('click', () => {
      indiceActual = (indiceActual + 1) % leyendasArray.length;
      leyendas(leyendasArray[indiceActual]);
    });
  } catch (e) {
    alert("Error");
  }
}

traerHistoria();



















// let leyendasArray = [];
// let indiceActual = 0;

// function leyendas(leyenda) {
//   document.querySelector('#titulo').textContent = leyenda.name;
//   document.querySelector('#contenido').textContent = leyenda.contenido;
//   document.querySelector('#imagen').setAttribute('src', leyenda.imagen);
// }

// async function traerHistoria() {
//   try {
//     const res = await fetch("../data/leyendas.json");
//     const data = await res.json();
//     leyendasArray = data;

//     leyendas(leyendasArray[indiceActual]);

//     const botonMostrar = document.querySelector('#botonMostrar');
//     botonMostrar.addEventListener('click', () => {
//       indiceActual = (indiceActual + 1) % leyendasArray.length;
//       leyendas(leyendasArray[indiceActual]);
//     });
//   } catch (e) {
//     alert("Error");
//   }
// }

// traerHistoria();




// function leyendas(leyenda) {
//     document.querySelector('#titulo').textContent = leyenda.name; 
//     document.querySelector('#contenido').textContent = leyenda.contenido;
//     document.querySelector('#imagen').setAttribute('src', leyenda.imagen);
//   }
//   async function traerHistoria() {
//     try {
//       const res = await fetch("../data/leyendas.json");
//       const data = await res.json();
//       const leyendasArray = data; 
      
//       function obtenerIndiceAleatorio(array) {
//         return Math.floor(Math.random() * array.length);
//       }
      
//       const indiceAleatorio = obtenerIndiceAleatorio(leyendasArray);
//       leyendas(leyendasArray[indiceAleatorio]);
      
//       const botonMostrar = document.querySelector('#botonMostrar');
//       botonMostrar.addEventListener('click', () => {
//         const nuevoIndiceAleatorio = obtenerIndiceAleatorio(leyendasArray);
//         leyendas(leyendasArray[nuevoIndiceAleatorio]);
//       });
//     } catch (e) {
//       alert("Error");
//     }
//   }
  
//   traerHistoria();