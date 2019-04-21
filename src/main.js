/* Manejo del DOM */

const containerElement = document.getElementById('conteiner');
/*
let dataHarry = [];
fetch ('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
   .then(data => data.json())
   .then(data => {
       dataHarry=data;
 */

const traer = () =>{
  //let dataHarry = [];
  fetch ('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json()) 
    .then(data => mostrarData(data))
          
}
    traer();
/* Funcion que permite mostrar la data en pantalla*/

const mostrarData = (data) => {
  let string = '';
  data.forEach(element => {
    string += `<div class="card">
                    <div class ="cabecera">
                      <img src=${element.image} alt=${data.name}  class='imagenRedonda'/>                                            
                      <p> ${element.name} </p>
                      <p>${element.house}</p>
                    </div> 
                    <div id="informacion" class='card1'>
                      <p>Especie: </p> 
                      <p> ${element.species}</p> 
                                             
                    </div> 
                </div>`
           });
        return containerElement.innerHTML = string;
      
  };

      

    
