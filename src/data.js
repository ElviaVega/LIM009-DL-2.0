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

const orderEdad = (data) =>{
  data.sort((a, b) => {
    const arrayOrder = a.edad-b.edad 
    return arrayOrder     
  });  
}
window.orderEdad = orderEdad;
