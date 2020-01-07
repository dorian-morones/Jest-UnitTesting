const randomStrings = require('../index')

describe('Pruebas de funciones en index.js', () =>{
    test('Probando funcion randomStrings', () => {
        expect(typeof (randomStrings())).toBe('string');
    }),
    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/)
    })  
})