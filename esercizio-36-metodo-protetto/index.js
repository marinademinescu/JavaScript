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
            this._controllaChilometri();
        } else {
            console.log('Il chilometraggio deve essere un numero positivo!');
        }
    }

    _controllaChilometri() {
        const limite = 100000;
        if (this._chilometraggio > limite) {
            console.log("Attenzione: il chilometraggio ha superato i" + " " + limite + ".");
        }
    }

    mostraChilometri() {
        return "Il chilometraggio attuale è di" + " " + this._chilometraggio + "km" + "."
    }

    descrizione() {
        return "Questa è una" + " " + this._marca + " " + this._modello + " " + "del" + " " + this._anno + ".";
    }
}

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
        if (km > 0) {
            this._autonomia += km;
        } else {
            console.log('Inserisci un numero positivo!')
        }
    }
}

const autoProtetta = new Elettrica("Tesla", "Model 2", 2022, 10000, 500);

autoProtetta.aggiungiChilometri(40000)
console.log(autoProtetta.descrizione());
console.log(autoProtetta.mostraChilometri());

autoProtetta.aggiungiChilometri(100000);
console.log(autoProtetta.descrizione());
console.log(autoProtetta.mostraChilometri())
