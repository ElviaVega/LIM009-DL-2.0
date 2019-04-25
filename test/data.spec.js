global.window = global;
require('../src/data');
require('./data.spec.js');
/*
describe('example', () => {
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
}); 
require('../src/data.js');
*/

const input = [
  {"name": "Harry Potter",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
      "wood": "holly",
      "core": "phoenix feather",
      "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
  },
  {
    "name": "Cedric Diggory",
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": 1977,
    "ancestry": "",
    "eyeColour": "grey",
    "hairColour": "brown",
    "wand": {
      "wood": "ash",
      "core": "unicorn hair",
      "length": 12.25
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Robert Pattinson",
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/cedric.png"
  },
  {
    "name": "Mrs Norris",
    "species": "cat",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "ancestry": "",
    "eyeColour": "yellow",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Maxime, Alanis and Tommy the cats",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/norris.JPG"
  }
];
const input1 = [
  {actor: "Daniel Radcliffe", edad: 39, gender: "male", house: "Gryffindor", image: "http://hp-api.herokuapp.com/images/harry.jpg", name: "Harry Potter", rol: "Estudiante", species: "human"}, 
  {actor: "Robert Pattinson", edad: 42, gender: "male", house: "Hufflepuff", image: "http://hp-api.herokuapp.com/images/cedric.png", name: "Cedric Diggory", rol: "Estudiante", species: "human"},
  {actor: "Maxime, Alanis and Tommy the cats", edad: "No especificado", gender: "female", house: "", image: "http://hp-api.herokuapp.com/images/norris.JPG", name: "Mrs Norris", rol: "Staff", species: "cat"}
];

const output1 = [
  {actor: "Daniel Radcliffe", edad: 39, gender: "male", house: "Gryffindor", image: "http://hp-api.herokuapp.com/images/harry.jpg", name: "Harry Potter", rol: "Estudiante", species: "human"}, 
  {actor: "Robert Pattinson", edad: 42, gender: "male", house: "Hufflepuff", image: "http://hp-api.herokuapp.com/images/cedric.png", name: "Cedric Diggory", rol: "Estudiante", species: "human"},
  {actor: "Maxime, Alanis and Tommy the cats", edad: "No especificado", gender: "female", house: "", image: "http://hp-api.herokuapp.com/images/norris.JPG", name: "Mrs Norris", rol: "Staff", species: "cat"}
];
const output2 = [
  {actor: "Robert Pattinson", edad: 42, gender: "male", house: "Hufflepuff", image: "http://hp-api.herokuapp.com/images/cedric.png", name: "Cedric Diggory", rol: "Estudiante", species: "human"},
  {actor: "Daniel Radcliffe", edad: 39, gender: "male", house: "Gryffindor", image: "http://hp-api.herokuapp.com/images/harry.jpg", name: "Harry Potter", rol: "Estudiante", species: "human"}, 
  {actor: "Maxime, Alanis and Tommy the cats", edad: "No especificado", gender: "female", house: "", image: "http://hp-api.herokuapp.com/images/norris.JPG", name: "Mrs Norris", rol: "Staff", species: "cat"}
];
const output3 = [
  {actor: "Robert Pattinson", edad: 42, gender: "male", house: "Hufflepuff", image: "http://hp-api.herokuapp.com/images/cedric.png", name: "Cedric Diggory", rol: "Estudiante", species: "human"},
  {actor: "Daniel Radcliffe", edad: 39, gender: "male", house: "Gryffindor", image: "http://hp-api.herokuapp.com/images/harry.jpg", name: "Harry Potter", rol: "Estudiante", species: "human"}
];

describe('datosHarry', () => {
  it('es una función', () => {
    expect(typeof datosHarry).toBe('function');
  });
  it('retorna un array modificado con propiedad edad y rol', () => {
    expect(datosHarry(input)).toEqual(output1);
  });
  it('retorna un nuevo array', () => {
    expect(datosHarry(input)).not.toBe(output1);
  });
});

describe('orderEdad', () => {
  it('es una función', () => {
    expect(typeof orderEdad).toBe('function');
  });
  it('retorna un array ordenado por edad', () => {
    expect(orderEdad(input1, 'edad', 'asc')).toEqual(output1);
  });
  it('retorna un nuevo array', () => {
    expect(orderEdad(input1, 'edad', 'asc')).not.toBe(output1);
  });
});
describe('orderEdad', () => {
  it('es una función', () => {
    expect(typeof orderEdad).toBe('function');
  });
  it('retorna un array ordenado por edad', () => {
    expect(orderEdad(input1, 'edad', 'desc')).toEqual(output2);
  });
  it('retorna un nuevo array', () => {
    expect(orderEdad(input1, 'edad', 'desc')).not.toBe(output2);
  });
});
describe('filtrar', () => {
  it('es una función', () => {
    expect(typeof filtrar).toBe('function');
  });
  it('retorna un array filtrado por genero masculino', () => {
    expect(filtrar(input1, 'gender', 'male')).toEqual(output3);
  });
  it('retorna un nuevo array', () => {
    expect(filtrar(input1, 'gender', 'male')).not.toBe(output3);
  });
});
