/* Manejo de data */
const datosHarry = (data) => {
  let arrayHarry1 = [];
  data.forEach((item)=>{
    let person = {};
    person['name'] = item.name;
    person['gender'] = item.gender;
    person['house']=item.house;
    person['species']=item.species;
    person['actor']=item.actor;
    person['image']=item.image;
    
    if(item.yearOfBirth === ""){
      person["edad"] = "No especificado";
    } else {
      let edad = new Date().getFullYear()-item.yearOfBirth;
      person["edad"]=edad; 
    };

    if (item.hogwartsStaff === true){
      person["rol"]= "personal";
    }else {
      person["rol"]= "Estudiante";
    };
    arrayHarry1.push(person);
  });
  return arrayHarry1;
}
 /*funcion que ordena de acuerdo a la edad*/

window.datosHarry = datosHarry;

const orderEdad = (data, prop) =>{
  const arrayOrder = data.sort((a, b) => a[prop]-b[prop])
  return arrayOrder     
}
window.orderEdad = orderEdad;

const filtrar = (data, prop, condicion) => {
  const filterArray = data.filter(item => item[prop] === condicion) 
  return filterArray
}
window.filtrar = filtrar
