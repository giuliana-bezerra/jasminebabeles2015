import NumerosRomanos from '../../../src/NumerosRomanos';

describe('NumerosRomanos', () => {
    let numerosRomanos;

    beforeEach(() => {
        numerosRomanos = new NumerosRomanos();
    });

    it('Deve ser 1', () => {
        expect(numerosRomanos.numerico('I')).toBe(1);
    });

    it('Deve ser 5', () => {
        expect(numerosRomanos.numerico('V')).toBe(5);
    });

    it('Deve ser 10', () => {
        expect(numerosRomanos.numerico('X')).toBe(10);
    });

    it('Deve ser 50', () => {
        expect(numerosRomanos.numerico('L')).toBe(50);
    });

    it('Deve ser 100', () => {
        expect(numerosRomanos.numerico('C')).toBe(100);
    });

    it('Deve ser 500', () => {
        expect(numerosRomanos.numerico('D')).toBe(500);
    });

    it('Deve ser 1000', () => {
        expect(numerosRomanos.numerico('M')).toBe(1000);
    });

    it('Deve ser 4', () => {
        expect(numerosRomanos.numerico('IV')).toBe(4);
    });

    it('Deve ser 16', () => {
        expect(numerosRomanos.numerico('XVI')).toBe(16);
    });
});