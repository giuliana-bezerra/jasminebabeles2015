import MaiorEMenor from '../../../src/MaiorEMenor';

describe('MaiorEMenorSpec', () => {
    it('Deve entender numeros em ordem nao sequencial', () => {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it ('Deve entender números em ordem descrescente', () => {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([9, 8, 7, 6]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it ('Deve entender números em ordem crescente', () => {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([6, 7, 8, 9]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it ('Deve entender apenas 1 elemento no array', () => {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([1]);

        expect(algoritmo.pegaMaior()).toEqual(1);
        expect(algoritmo.pegaMenor()).toEqual(1);
    });
});