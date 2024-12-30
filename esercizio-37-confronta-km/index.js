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

    static confrontaChilometraggio(auto1, auto2) {
        if(auto1._chilometraggio > auto2._chilometraggio) {
            return auto1._marca + " " + auto1._modello + " " + "ha più chilometri di " + auto2._marca +" " + auto2._modello + "!"
        } else if  (auto1._chilometraggio < auto2._chilometraggio) {
            return auto2._marca + " " + auto2._modello + " " + " ha più chilometri di " + auto1._marca  + " " + auto1._modello + "!"
        } else {
            return "Le due automobili hanno lo stesso chilometraggio!"
        }
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

const auto1 = new Automobile ("Honda", "Civic", 2018, 45000);
const auto2 = new Automobile ( "Ford", "Fiesta", 2020, 85000);

auto1.aggiungiChilometri(30000)
auto2.aggiungiChilometri(20000);

console.log(Automobile.confrontaChilometraggio(auto1, auto2));

auto1.aggiungiChilometri(45000)
auto2.aggiungiChilometri(15000)

console.log(Automobile.confrontaChilometraggio(auto1, auto2));