const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");
const opcion1 = document.getElementById("opcion1");
const opcion2 = document.getElementById("opcion2");
const btnConocer = document.getElementById("conocer");

// Se crea un objeto que contiene la información de cada parte de la historia
const historia = {
  inicio: {
    imagen: "./img/AnillodeFuego.jpg",
    texto: "¿Estas listo para seguir tu destino? Elige convertirte en un Honorable Caballero o en un Mago en ascenso",
    opcion1: "Caballero",
    opcion2: "Mago",
  },
  Caballero: {
    imagen: "./img/cabana.jpg",
    texto:"Has elegido ser un caballero. transitas por un antiguo sendero olvidado, ves una cabaña a lo lejos",
    opcion1: "entrar",
    opcion2: "seguir",
  },
  entrar: {
    imagen: "./img/cofres.jpg",
    texto: "Al entrar encuentras 2 cofres cerrados, ¿cuál quieres abrir?",
    opcion1: "izquierda",
    opcion2: "derecha",
  },
  izquierda: {
    imagen: "./img/Arma1C.jpg",
    texto:
      "Abres el cofre y encuentras una daga encantada, puede ser útil más adelante. ¿Quieres salir de la cabaña o quedarte a investigar?",
    opcion1: "salir",
    opcion2: "investigar",
  },
  derecha: {
    imagen: "./img/Arma2C.jpg",
    texto:
      "Abres el cofre y encuentras una gran espada, puede ser útil más adelante. ¿Quieres volver al sendero o investigar la cabaña?",
    opcion1: "volver",
    opcion2: "investigar",
  },
  seguir: {
    imagen: "./img/puenteC.jpg",
    texto:
      "Sigues tu camino y llegas a un puente, sientes una presencia extraña. ¿Quieres continuar?",
    opcion1: "continuar",
    opcion2: "no",
  },
  continuar: {
    imagen: "./img/PeleaEspirituPuenteC.jpg",
    texto:
      "Todo se vuelve oscuro de repente y ante ti aparece el Espíritu del bosque. !A luchar!",
    opcion1: "pelea",
    opcion2: "",
  },
  no: {
    imagen: "./img/lobo.jpg",
    texto:
      "Das media vuelta para ir por otro camino y eres sorprendido por un lobo gigante que te derrota. PERDISTE",
    opcion1: "",
    opcion2: "",
  },
  salir: {
    imagen: "./img/portal1.jpg",
    texto:
      "sales de la cabaña y te topas con un portal mágico. ¿Quieres cruzar?",
    opcion1: "cruzar",
    opcion2: "noCruzar",
  },
  investigar: {
    imagen: "./img/portal2.jpg",
    texto:
      "Investigas la cabaña y encuentras unas escaleras, al subir descubres un portal mágico. ¿Quieres Cruzar?",
    opcion1: "cruzar",
    opcion2: "noCruzar",
  },
  volver: {
    imagen: "./img/senderonoche.jpg",
    texto:
      "vuelves a tu camino y notas que se ha hecho de noche. No tengas miedo, ¡hay que seguir adelante!",
    opcion1: "adelante",
    opcion2: "rendirse",
  },
  cruzar: {
    imagen: "./img/mundo2C.jpg",
    texto:
      "Llegas a una aldea siendo atacada por un Monstruo gigante de piedra. Es hora de demostrar tu valor.",
    opcion1: "pelea",
    opcion2: "",
  },
  noCruzar: {
    imagen: "./img/fincaballero.jpg",
    texto:
      "Has decidido no cruzar el portal. No eres digno del poder del anillo, tu valentía no es suficiente. FIN DEL JUEGO",
    opcion1: "",
    opcion2: "",
  },
  rendirse: {
    imagen: "./img/fincaballero.jpg",
    texto:
      "Has decidido rendirte. No eres digno del poder del anillo, tu valentía no es suficiente. FIN DEL JUEGO",
    opcion1: "",
    opcion2: "",
  },
  adelante: {
    imagen: "./img/peleabosque.jpg",
    texto:
      "El bosque se comienza a llenar de destellos y de las ramas y arbustos comienza a emerger una figura enorme. ¡Demuestra tu honor y lucha contra el",
    opcion1: "pelea",
    opcion2: "",
  },
  Mago: {
    imagen: "./img/cuevamago.jpg",
    texto:
      "Has elegido ser un mago. Transitas un antiguo bosque olvidado y a lo lejos ves una cueva. ¿Quieres ir a la cueva o seguir el sendero?",
    opcion1: "ir",
    opcion2: "sendero",
  },
  ir: {
    imagen: "./img/cofresmago.jpg",
    texto:
      "Entras a la cueva y todo esta oscuro, sigues caminando y al fondo encuentras una luz. Son cofres mágicos. ¿Cuál quieres abrir?",
    opcion1: "plateado",
    opcion2: "dorado",
  },
  sendero: {
    imagen: "./img/bosque.jpg",
    texto:
      "Sigues tu camino por el bosque, tienes el presentimiento de que algo se está acercando",
    opcion1: "enfrentar",
    opcion2: "irse",
  },
  plateado: {
    imagen: "./img/cetro.jpg",
    texto:
      "¡Encontraste un cetro mágico!. Puede ser de ayuda para seguir tu camino a través del bosque. ¿Quieres irte de la cueva o quieres llegar al final del túnel?",
    opcion1: "irte",
    opcion2: "túnel",
  },
  dorado: {
    imagen: "./img/baculo.jpg",
    texto:
      "¡Encontraste un Báculo de rayos oscuros!. Una de las armas más raras de estas tierras y tú fuiste el elegido para portarla. ¿Quieres volver al camino o seguir explorando la cueva?",
    opcion1: "camino",
    opcion2: "explorando",
  },
  enfrentar: {
    imagen: "./img/espiritubosque.jpg",
    texto:
      "Una figura tenebrosa se alza ante ti. Prepárate para demostar tus poderes.",
    opcion1: "pelea",
    opcion2: "",
  },
  irse: {
    imagen: "./img/irsemago.jpg",
    texto:
      "El bosque y sus misterios fue demasiado para tí. Pierdes tus poderes al mostrar que tu valentía no es digna de recibir la grandeza. FIN DEL JUEGO.",
    opcion1: "",
    opcion2: "",
  },
  irte: {
    imagen: "./img/bosquelago.jpg",
    texto:
      "al salir de la cueva notas que los árboles se van apagando, sus hojas se convierten en ceniza. Ves un lago frente a ti ¿quieres ir a indagar?",
    opcion1: "irse",
    opcion2: "indagar",
  },
  túnel: {
    imagen: "./img/suelocueva.jpg",
    texto:
      "Seguiste avanzando por el túnel, de repente notas que el piso se mueve ¡todo se desmorona! y caes en otro túnel. ¿Quieres llegar al final?",
    opcion1: "irse",
    opcion2: "llegar",
  },
  camino: {
    imagen: "./img/camino2.jpg",
    texto:
      "Vuelves al bosque, una lluvia imparable azota los árboles, a lo lejos ves que algo surge desde el pantáno. ¿Quieres ir a ver?",
    opcion1: "ver",
    opcion2: "irse",
  },
  llegar: {
    imagen: "./img/espiritubosque.jpg",
    texto:
      "Sales del túnel y una figura tenebrosa se alza ante ti. ¡Prepárate para demostar tus poderes!.",
    opcion1: "pelea",
    opcion2: "",
  },
  ver: {
    imagen: "./img/troll.jpg",
    texto:
      "Un monstruo se hace presente en el pántano, demuestra ser digno del poder y gana la pelea",
    opcion1: "pelea",
    opcion2: "",
  },
  explorando: {
    imagen: "./img/tunelpelea.jpg",
    texto:
      "El guardián del túnel está frente a ti y quiere robarte tu arma. ¡No te dejes vencer!",
    opcion1: "pelea",
    opcion2: "",
  },
  indagar: {
    imagen: "./img/pelealago.jpg",
    texto:
      "El guardián del Lago Negro está frente a ti y quiere robarte tu alma ¡No te dejes vencer!",
    opcion1: "pelea",
    opcion2: "",
  },
};

// Estado actual del juego
let estado = historia.inicio;

// Función para actualizar la pantalla del juego
function actualizarJuego(opcion) {
  estado = historia[opcion];
  imagen.src = estado.imagen;
  texto.innerHTML = estado.texto;
  guardarProgreso();

  if (estado.opcion1 === "pelea") {
    opcion1.style.display = "none";
    opcion2.style.display = "none";
    const botonPelea = document.createElement("button");
    botonPelea.innerHTML = "¡A luchar!";
    document.getElementById("botones").appendChild(botonPelea);
    botonPelea.addEventListener("click", function () {
      iniciarPelea();
    });
  
    if (estado.opcion1 === "" && estado.opcion2 === "") {
      // Si no hay opciones, se ocultan los botones
      opcion1.style.display = "none";
      opcion2.style.display = "none";
    }
  } else {
    // Si hay opciones, se muestran los botones y se cambia el texto
    opcion1.style.display = "block";
    opcion2.style.display = "block";
    opcion1.innerHTML = estado.opcion1;
    opcion2.innerHTML = estado.opcion2;
  }
}
//funcion para guardar el estado del juego
function guardarProgreso() {
  localStorage.setItem('estado', JSON.stringify(estado));
}


// Función para iniciar la pelea y esconder el botón -a luchar
function iniciarPelea() {
  opcion1.removeEventListener("click", iniciarPelea);
  const botonPelea = document.getElementById("botones"); 
  botonPelea.style.display = "none";
  reproducirNuevaCancion();
  pelea();
}

const MIN = 10;
const MAX = 30;
let energiaJugador = 100;
let energiaMonstruo = 100;

//Función para calcular el golpe aleatorio del oponente
function calcularGolpe() {
  return Math.ceil(Math.random() * (MAX - MIN) + MIN);
}

const ambosVivos = () => energiaJugador > 0 && energiaMonstruo > 0;


// Función para simular la pelea
function pelea() {
  // Se crean elementos de entrada y salida en el DOM
  texto.innerHTML = 'Utilice el número 20 para golpear y el número 25 para atacar con el arma obtenida. ¡A por él!';
  const input = document.createElement('input');
  input.type = 'number';
  input.min = 20;
  input.max = 25;
  input.step = 5;
  
  document.getElementById("input").appendChild(input);

const output = document.createElement('div');
  document.getElementById("output").appendChild(output);

  // se crea botón para atacar
  const botonAtacar = document.createElement('button');
  botonAtacar.innerHTML = "Atacar";
  document.getElementById("atacar").appendChild(botonAtacar);
  botonAtacar.addEventListener("click", function () {
    let golpeJugador = Number(input.value);
        if (golpeJugador === 20 || golpeJugador === 25) {
          const golpeMonstruo = calcularGolpe();
          energiaMonstruo -= golpeJugador;
          energiaJugador -= golpeMonstruo;
          output.innerHTML += "Golpeaste " + golpeJugador + " puño.<br>";
          output.innerHTML += "El monstruo te hizo " + golpeMonstruo + " de daño.<br>";
          output.innerHTML += "Tu energía es de " + energiaJugador + "<br>";
          output.innerHTML += "La energía del monstruo es " + energiaMonstruo + "<br>";

          if (!ambosVivos()) {
            if (energiaJugador <= 0) {
              output.innerHTML += "El monstruo te ha vencido.<br>";
              Swal.fire("el monstruo te ha vencido. La valentía y lucha no son para cualquiera")
            } else {
              output.innerHTML += "¡Venciste al monstruo!<br>";
              Swal.fire("¡Venciste al Monstruo! Demostraste ser digno del poder que se te otorga")
            }
          }
        } else {
          output.textContent = "No estás atacando, escribe '20' o '25' para atacar.";
        }
  });
}


//asigando los eventos de click para cada boton de eleccion
opcion1.addEventListener("click", function () {
  btnConocer.style.display = "none";
  const opcionSeleccionada = estado.opcion1 ?? "defaultOpcion1";
  actualizarJuego(opcionSeleccionada);
  reproducirAudio();
});

opcion2.addEventListener("click", function () {
  btnConocer.style.display = "none";
  const opcionSeleccionada = estado.opcion2 ?? "defaultOpcion2";
  actualizarJuego(opcionSeleccionada);
  reproducirAudio();
});

let audio = new Audio("./img/celtic-7136.mp3");
let sonidoReproducido = false;

function reproducirAudio() {
  if (!sonidoReproducido) {
    audio.play();
    sonidoReproducido = true;
  }
}

// Función para reproducir una nueva canción
function reproducirNuevaCancion() {
  // Detiene la canción actual
  audio.pause();
  
  //Se Cambia la ruta a la nueva canción
  let nuevaCancion = new Audio("./img/batalla.mp3");
  nuevaCancion.play();
}
