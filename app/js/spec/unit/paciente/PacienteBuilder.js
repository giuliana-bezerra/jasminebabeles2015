import Paciente from "../../../src/Paciente";

// Test Data Builder
export default class PacienteBuilder {
    constructor() {
        this._nome = 'Giuliana';
        this._idade = 29;
        this._peso = 57;
        this._altura = 1.58;
    }

    build() {
        return new Paciente(
            this._nome, 
            this._idade, 
            this._peso, 
            this._altura
        );
    }

    comIdade(idade) {
        this._idade = idade;
        return this;
    }

    comPeso(peso) {
        this._peso = peso;
        return this;
    }
}