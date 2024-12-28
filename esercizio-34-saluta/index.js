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

    descrizione() {
        return "Questa è una" + " " + this._marca + " " + this._modello + " " + "del" + " " + this._anno + ".";
    }
}


Automobile.prototype.saluta = function (){
    return "Ciao sono una" + " " + this._marca + " " + this._modello + "!";
};


class Elettrica extends Automobile {
    _autonomia;

    constructor(marca, modello, anno, chilometraggio = 0, autonomia = 0) {
        super(marca, modello, anno, chilometraggio);
        this._autonomia = autonomia;
    }

    descrizione() {
        return super.descrizione() + 'Ha un autonomia di ' + '' + this._autonomia + '' + 'Km' + '.'
    };

    ricarica(km) {
        if(km > 0) {
            this._autonomia += km;
        } else {
console.log('Inserisci un numero positivo!')
        }
    }
}


const auto1 = new Automobile("Honda", "Civic");
console.log(auto1.saluta());

const auto2 = new Elettrica("Tesla", "Model 3");
console.log(auto2.saluta());