import Agendamento from '../../../src/Agendamento';
import Consulta from '../../../src/Consulta';
import PacienteBuilder from './PacienteBuilder';

describe('Agendamento', () => {
    let giuliana;
    let agendamento;

    beforeEach(() => {
        giuliana = new PacienteBuilder().build();
        agendamento = new Agendamento();
    });

    it('Deve agendar para 20 dias depois', () => {
        let consulta = new Consulta(giuliana, [], false, false, 
            new Date(2019, 7, 1));
            let novaConsulta = agendamento.para(consulta);

        expect(novaConsulta.data.toString())
            .toEqual(new Date(2019, 7, 21).toString());
    });

    it('Deve pular fins de semana', () => {
        let consulta = new Consulta(giuliana, [], false, false, new Date(2014, 5, 30));
        let novaConsulta = agendamento.para(consulta);
        
        expect(novaConsulta.data.toString()).toEqual(new Date(2014, 6, 21).toString());
    });
});