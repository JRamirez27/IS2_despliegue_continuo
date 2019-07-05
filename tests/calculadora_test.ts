import {Calculadora} from "../main"

// Pruebas Unitarias
describe("Calculadora Test", ()=>{
    it("sumar",()=>{
        let calculadora: Calculadora = new Calculadora()
        let resObetnido=calculadora.sumar(5,8)
        let resEsperado=13
        expect(resEsperado).toEqual(resObetnido)
    })
})