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
  {name: 'Harry Potter', hogwartsStaff: false, hogwartsStudent: true, yearOfBirth: 1980}, 
  {name: 'Draco Malfoy', hogwartsStaff: false, hogwartsStudent: true, yearOfBirth: 1980}, 
  {name: 'Bellatrix Lestrange', hogwartsStaff: false, hogwartsStudent: false, yearOfBirth: 1951}, 
  {name: 'Minerva McGonagall', hogwartsStaff: false, hogwartsStudent: false, yearOfBirth: 1925},
  {name: 'Cho Chang', hogwartsStaff: false, hogwartsStudent: true, yearOfBirth: ""},
];

const output1 = [
  {name: 'Harry Potter', edad: 39, rol: "Estudiante"  }, 
  {name: 'Draco Malfoy', edad: 39 , rol: "Estudiante" }, 
  {name: 'Bellatrix Lestrange', edad: 68 , rol:"no especificado" }, 
  {name: 'Minerva McGonagall', edad: 94 , rol: "Staff" },
  {name: 'Cho Chang', edad: "No especificado" , rol: "Estudiante" }
];

  describe('datosHarry', () => {
    it('es una función', () => {
      expect(typeof datosHarry).toBe('function');
    });
    it('retorna un array modificado con propiedad edad y rol', () => {
      expect(datosHarry(input)).toEqual(output1);
    });
    it('retorna un nuevo array', ()=> {
      expect(datosHarry(input)).not.toBe(output1);
    });
  });

