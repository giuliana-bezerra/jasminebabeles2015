export default class MaiorEMenor {
    constructor() {
        this._menor = Number.MAX_VALUE;
        this._maior =  Number.MIN_VALUE;
    }

    encontra(nums) {
        nums.forEach(num => {
            if (num < this._menor) this._menor = num;
            else if (num > this._maior) this._maior = num;
        });
    }

    pegaMenor() {
        return this._menor;
    }

    pegaMaior() {
        return this._maior;
    }
}