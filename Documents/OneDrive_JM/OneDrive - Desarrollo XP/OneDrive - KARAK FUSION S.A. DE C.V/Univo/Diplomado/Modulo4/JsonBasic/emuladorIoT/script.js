// Constantes para acceso de elementos del html
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");
const luzInt = document.getElementById("luzInt");
const luzExt = document.getElementById("luzExt");

//Constantes para URL API UBIDOTS
const apiURL =
  "http://industrial.api.ubidots.com/api/v1.6/devices/hab-101/?token=BBFF-66D4qYmCHV62gTsBsJX9Y1E9V6W8Ki";
const tasaRequest = 2500;

//Variables para manipular el emulador
let data;
let edoLuzInt = 0;
let edoLuzExt = 0;

// Manejador de Evento click del boton que inicia el emulador
iniciar.addEventListener("click", () => {
  console.log(":::INICIA EMULADOR:::");
  data = setInterval(generarDatos, tasaRequest);
});

//Función para generar datos de prueba de manera aleatorios
const generarDatos = function () {
  let date = new Date();
  let time = date.toLocaleTimeString();

  let temperatura = parseFloat((Math.random() * (36 - 22) + 22).toFixed(2));
  let humedad = parseFloat((Math.random() * (90 - 65) + 65).toFixed(2));

  // Uso de AXIOS para enviar datos al API de UBIDOTS
  axios({
    method: "POST",
    url: apiURL,
    data: {
      temp: temperatura,
      hum: humedad,
    },
  })
    .then((res) => {
      console.log(
        time,
        " - ",
        "temp: ",
        temperatura,
        "; humedad: ",
        humedad,
        res.statusText
      );
    })
    .catch((error) => {
      console.log("REQUEST DE VARIABLES NO PROCESADOS", error);
    });
};

// Evento para encender/apagar luces interiores
luzInt.addEventListener("click", () => {
  // Uso de AXIOS para enviar datos al API de UBIDOTS
  axios({
    method: "POST",
    url: apiURL,
    data: {
      lint: switchLuz("int"),
    },
  })
    .then((res) => {
      console.log("LUCES INTERIORES: ", edoLuzInt);
    })
    .catch((error) => {
      console.log("REQUEST DE LUCES INTERIORES NO PROCESADOS", error);
    });
});

// Evento para encender/apagar luces exteriores
luzExt.addEventListener("click", () => {
  // Uso de AXIOS para enviar datos al API de UBIDOTS
  axios({
    method: "POST",
    url: apiURL,
    data: {
      lext: switchLuz("ext"),
    },
  })
    .then((res) => {
      console.log("LUCES EXTERIORES: ", edoLuzExt);
    })
    .catch((error) => {
      console.log("REQUEST DE LUCES EXTERIORES NO PROCESADOS", error);
    });
});

// Función que simula el cambio de estado de las Luces
const switchLuz = function (tipo) {
  if (tipo === "int") {
    return edoLuzInt === 0 ? (edoLuzInt = 1) : (edoLuzInt = 0);
  } else {
    return edoLuzExt === 0 ? (edoLuzExt = 1) : (edoLuzExt = 0);
  }
};

// Manejo de eventos para detener el emulador IoT
detener.addEventListener("click", () => {
  clearInterval(data);
  console.log(":::EMULADOR DETENIDO:::");
});
