/* Manejo del DOM */
const containerElement = document.getElementById('container');

const cargarJson = () => {
  fetch ('https://raw.githubusercontent.com/ElviaVega/LIM009-DL-2.0/master/src/data/potter.json')
    .then(response => response.json()) 
    .then(data => {
      console.log(datosHarry(data));
      mostrarData(datosHarry(data));
      console.log(orderEdad(datosHarry(data)));
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


    
