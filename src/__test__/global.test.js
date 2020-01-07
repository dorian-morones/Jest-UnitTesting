const text = "Hola Mundo";
const fruit = ['manzana', 'melon', 'banana' ];

describe('Pruebas de string', () => {
    test('Debe contener un texto', () => {
        expect(text).toMatch(/Mundo/);
    }),
    test('Buscar frutas en un array', () =>{
        expect(fruit).toContain('banana');
    }),
    test('Mayor que', () => {
        expect(10).toBeGreaterThan(9);
    }),
    test('Verdadero', () =>{
        expect(true).toBeTruthy();
    })
})


describe('Pruebas de callbacks//asynWait//Promise', () => {
    const reverseString = (str, callback) => {
        callback(str.split("").reverse().join(""))
    }
    
    test('Probando callback', () =>{
        reverseString("Hola", (str) =>{
            expect(str).toBe("aloH")
        })
    })
    
    const reverseString2 = str =>{
        return new Promise((resolve, reject) =>{
            if(!str){
                reject(error('Error, missing string'))
            }
            resolve(str.split("").reverse().join(""))
        })
    }
    
    test('Probando Promise', () =>{
        return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH');
        })
    })
    
    test('Probando Async//wait', async() =>{
        const string = await reverseString2('Hola');
        expect(string).toBe('aloH')
    })
})

// beforeEach(() => console.log('La prueba se va a ejecutar'))
// beforeAll(() => console.log('Las pruebas se van a ejecutar'))
// afterEach(() => console.log('Prueba ejecutada'))
// afterAll(() => console.log('Todas las pruebas ejecutada'))