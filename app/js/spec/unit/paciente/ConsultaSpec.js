import Consulta from '../../../src/Consulta';
import PacienteBuilder from './PacienteBuilder';

describe('Consulta', () => {
    let giuliana;

    beforeEach(() => {
        giuliana = new PacienteBuilder().build();
    })

    describe('Consultas do tipo retorno', () => {
        it('Não deve cobrar nada se for um retorno', () => {
            let consulta = new Consulta(giuliana, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe('Consultas com procedimentos', () => {
        it('Deve cobrar 25 por cada procedimento comum', () => {
            let consulta = new Consulta(giuliana, ['proc1', 'proc2'], false, false);
            expect(consulta.preco()).toEqual(50);
        });

        it('Deve cobrar preço específico dependendo do procedimento', () => {
            let consulta = new Consulta(giuliana, ['procedimento-comum', 'raio-x', 'procedimento-comum', 'gesso'], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

    describe('Consultas particulares', () => {
        it('Deve cobrar consulta particular só com procedimentos comuns', () => {
            let consulta = new Consulta(giuliana, ['procedimento-comum', 'procedimento-comum'], true, false);
            expect(consulta.preco()).toEqual((25 + 25) * 2);
        });

        it('Deve cobrar consulta particular com procedimentos especiais', () => {
            let consulta = new Consulta(giuliana, ['procedimento-comum', 'raio-x', 'gesso'], true, false);
            expect(consulta.preco()).toEqual((25 + 55 + 32) * 2);
        });
    });
});