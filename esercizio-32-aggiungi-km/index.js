class Automobile {
    _marca;
    _modello;
    _anno;
    _chilometraggio;

    constructor(marca, modello, anno, chilometraggio = 0) {
        this._marca = marca;
        this._modello = modello;
        this._anno = anno;
        this._chilometraggio = chilometraggio;
    }
    aggiungiChilometri(km) {
        if (km > 0) {
            this._chilometraggio += km;
        } else {
            console.log('Il chilometraggio deve essere un numero positivo!');
        }
    }

        mostraChilometri() {
            return "Il chilometraggio attuale è di" + " " + this._chilometraggio + "km" + "."
        }
    }

    const miaAuto = new Automobile('Honda', 'Civic', 2020, 50000);
console.log(miaAuto.mostraChilometri());

miaAuto.aggiungiChilometri(100);
console.log(miaAuto.mostraChilometri());