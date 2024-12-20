class Automobile {
    _marca;
    _modello;
    _anno;

    constructor(marca, modello, anno) {
        this._marca = marca;
        this._modello = modello;
        this._anno = anno;
    }

    descrizione() {
        return "Questa è una" + " " + this._marca + " " + this._modello + " " + "del" + " "  + this._anno + ".";
    }

}

const miaAuto = new Automobile('Honda', 'Civic', 2020);
console.log(miaAuto.descrizione());