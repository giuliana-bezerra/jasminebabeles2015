import MaiorEMenor from '../../../src/MaiorEMenor';

describe('MaiorEMenorSpec', () => {
    it('Deve entender numeros em ordem nao sequencial', () => {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });
});