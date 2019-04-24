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
  {name: 'Harry Potter', house: 'Gryffindor', hogwartsStudent: true, yearOfBirth: 1980 }, 
  {name: 'Draco Malfoy', house: 'Slytherin', hogwartsStudent: true, yearOfBirth: 1980}, 
  {name: 'Bellatrix Lestrange', house: 'Slytherin', hogwartsStudent: false, yearOfBirth: 1951}, 
  {name: 'Minerva McGonagall', house: 'Gryffindor', hogwartsStudent: false, yearOfBirth: 1925},
  {name: 'Cho Chang', house: 'Ravenclaw', hogwartsStudent: true, yearOfBirth: ""},
];

const output1 = [
actor: "Daniel Radcliffe"
edad: 39
gender: "male"
house: "Gryffindor"
image: "http://hp-api.herokuapp.com/images/harry.jpg"
name: "Harry Potter"
rol: "Estudiante"
species: "human"
  {name: 'Harry Potter', house: '', hogwartsStudent: false}, 
  {name: 'ARTHUR WEASLEY', house: 'Gryffindor', hogwartsStudent: false}, 
  {name: 'BELLATRIX LESTRANGE', house: 'Slytherin', hogwartsStudent: false}, 
  {name: 'CEDRIC DIGGORY', house: 'Hufflepuff', hogwartsStudent: true},
  {name: 'CHO CHANG', house: 'Ravenclaw', hogwartsStudent: true}
];

  describe('datosHarry', () => {
    it('es una función', () => {
      expect(typeof datosHarry).toBe('function');
    });
    it('retorna un array modificado con propiedad edad y rol', () => {
      expect(potter.modificarNombres(input)).toEqual(output1);
    });
    it('retorna un nuevo array', ()=> {
      expect(potter.modificarNombres(input)).not.toBe(output1);
    });
  });
});
