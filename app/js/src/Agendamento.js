import Consulta from "./Consulta";

export default class Agendamento {
    para(consulta) {
        let novaData = new Date(
            consulta.data.setDate(consulta.data.getDate() + 20));

        while(/[06]/.exec(novaData.getDay())) {
            novaData.setDate(novaData.getDate() + 1);
        }

        let novaConsulta = new Consulta(
            consulta.nome,
            consulta.procedimentos,
            consulta.particular,
            true,
            novaData);
        return  novaConsulta;
    }
}