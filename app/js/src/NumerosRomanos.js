export default class NumerosRomanos {
    numerico(numeroRomano) {
        switch(numeroRomano) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return this._calcularNumerico(numeroRomano);
        }
    }

    _calcularNumerico(numeroRomano) {
        if (numeroRomano.startsWith('I')) 
            return this.numerico(numeroRomano.substring(1)) - 1;
        if (numeroRomano)
            return this.numerico(numeroRomano) + this.numerico(numeroRomano.substring(1));
    }
}