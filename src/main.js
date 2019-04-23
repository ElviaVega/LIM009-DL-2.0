/* Manejo del DOM */
const containerElement = document.getElementById('container');
const ascend = document.getElementById("asc");
const descend = document.getElementById("desc");
const genero = document.getElementById("genero");
const rol = document.getElementById("rol");
const casa = document.getElementById("casa");

const cargarJson = () => {
  fetch ('https://raw.githubusercontent.com/ElviaVega/LIM009-DL-2.0/master/src/data/potter.json')
    .then(response => response.json()) 
    .then(data => {
      mostrarData(datosHarry(data));
      ordAsc(datosHarry(data));
      filtradoGenero(datosHarry(data));
      filtradoRol(datosHarry(data));
      filtradoCasa(datosHarry(data));
    })
}
cargarJson();

/* Funcion que permite mostrar la data en pantalla*/

const mostrarData = (data) => {
  let string = '';
  data.forEach(element => {
    string += `
      <div class="card">
        <div class ="cabecera">
          <img src=${element.image} alt=${data.name}  class='imagenRedonda'/>                                            
          <p> ${element.name} </p>
          <p>${element.house}</p>
        </div> 
        <div id="informacion" class='card1'>
          <p>Especie: </p> 
          <p> ${element.species}</p>
          <p>Rol: </p>
          <p> ${element.rol}</p>
          <p>Edad: </p>
          <p> ${element.edad}</p>
          <p>Actor: </p>
          <p> ${element.actor}</p>                        
        </div> 
      </div>
    `
  });
  return containerElement.innerHTML = string;
};

const ordAsc = (data) => {
  ascend.addEventListener("click", () => mostrarData(orderEdad(data, 'edad'))
  ) 
} 

const filtradoGenero = (data) => {
  genero.addEventListener("change", (event) => {
    event.preventDefault();
    let condGenero = event.target.value;
    if (condGenero === "femenino") {
      condGenero= "female"
      mostrarData(filtrar(data, "gender", condGenero))
    }else {
      condGenero= "male" 
      mostrarData(filtrar(data, "gender", condGenero))
    }
       
  })
}

const filtradoRol = (data) => {
  rol.addEventListener("change", () => {
    let condRol = rol.value;
    mostrarData(filtrar(data, "rol", condRol))
  })
}

const filtradoCasa = (data) => {
  casa.addEventListener("change", () => {
    let condCasa = casa.value;
    mostrarData(filtrar(data, "house", condCasa))
  })
}