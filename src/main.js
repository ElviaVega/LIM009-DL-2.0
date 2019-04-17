/* Manejo del DOM */
const containerElement = document.getElementById('conteiner');
  function traer(){
    fetch( 'https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
      .then(res => res.json())
      .then(data => mostrarData(data))
        const mostrarData = (data) => {
          let string = '';
          for (let i = 0; i < data.length; i++) {
            string += `<div class="card">
                        <div>
                          <img src=${data[i].image} alt=${data[i].name}  class='imagenRedonda'/>
                        </div>  
                        <div id='card' class='card1'>
                          <h3> ${data[i].name} </h3>
                          <h4>${data[i].house}</h4>
                          <p>Especie: ${data[i].species}</p> 
                                             
                        </div> 
                      </div>`
           };
          
        return containerElement.innerHTML = string;
      } 
}
traer();
  



