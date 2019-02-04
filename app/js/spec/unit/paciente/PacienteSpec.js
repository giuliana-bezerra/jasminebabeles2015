import Paciente from '../../../src/Paciente';

// Um teste por classe de equivalência
describe('Paciente', () => {
    it ('Deve calcular o imc da Giuliana', () => {
        var giuliana = new Paciente('Giuliana', 29, 57, 1.58);
        var imc = giuliana.imc();
        expect(imc).toEqual(57 / Math.pow(1.58, 2));
    });

    it ('Deve calcular os batimentos da Giuliana', () => {
        var giuliana = new Paciente('Giuliana', 29, 57, 1.58);
        expect(giuliana.batimentos()).toEqual(29 * 365 * 24 * 60 * 80);
    });
});