class Automobile {
    _marca;
    _modello;
    _anno;
    #chilometraggio;
    #contatoreChiamate;

    constructor(marca, modello, anno, chilometraggio = 0) {
        this._marca = marca;
        this._modello = modello;
        this._anno = anno;
        this.#chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0;
    }

    static verificaIstanza(obj,classe) {
        if(obj instanceof classe) {
            return obj.constructor.name + " " + "è un istanza della classe " + " " +  classe.name + "."
        } else {
            return obj.constructor.name + " " + " Non è un'istanza della  classe" + " "  + classe
        }
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.#incrementaContatore();
            this.#chilometraggio += km;
            console.log("Chilometraggio aggiornato: " + " " + this.#chilometraggio);
        } else {
            console.log("Inserisci un numnero maggiore di 0")
        }

    }

    _controllaChilometri() {
        const limite = 100000;
        if (this.#chilometraggio > limite) {
            console.log("Attenzione: il chilometraggio ha superato i" + " " + limite + ".");
        }
    }

    mostraChilometri() {
        return "Il chilometraggio attuale è di" + " " + this.#chilometraggio + " " + "km" + "."
    }

    descrizione() {
        return "Questa è una" + " " + this._marca + " " + this._modello + " " + "del" + " " + this._anno + ".";
    }


    get chilometraggio() {
        return this.#chilometraggio;
    }

    set chilometraggio(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.#chilometraggio) {
            this.#chilometraggio = nuovoChilometraggio
            console.log("Chilometraggio aggiornato a:" + " " + this.#chilometraggio + " " + "km" + ".")
        } else {
            console.log("Errore: il nuovo chilometraggio deve essere maggiore o uguale a quello attuale!")
        }
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1._chilometraggio > auto2._chilometraggio) {
            return auto1._marca + " " + auto1._modello + " " + "ha più chilometri di " + auto2._marca + " " + auto2._modello + "!"
        } else if (auto1._chilometraggio < auto2._chilometraggio) {
            return auto2._marca + " " + auto2._modello + " " + " ha più chilometri di " + auto1._marca + " " + auto1._modello + "!"
        } else {
            return "Le due automobili hanno lo stesso chilometraggio!"
        }
    }

    mostraContatoreChiamate() {
        return "Restituisce il numero di volte che il contatore è stato chiamato:" + " " + this.#contatoreChiamate + " " + "volte" + "."
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

class Camion extends Automobile {

    _caricoMassimo;
    _caricoAttuale;

    constructor(marca, modello, anno, chilometraggio = 0, caricoMassimo = 0) {
        super(marca, modello, anno, chilometraggio);
        this._caricoMassimo = caricoMassimo;
        this._caricoAttuale = 0;

    }

    descrizione() {
        return super.descrizione() + "Questo è un camion!" + "Ha un carico massimo di: " + " " + this_caricoMassimo + " " + "kg."
    }


    carica(kg) {
        if (kg <= 0) {
            console.log('Errore: il carico deve essere un valore positivo.');
            return;
        }
        console.log('Carico ricevuto: ' + kg + ' kg.');

        if (this._caricoAttuale + kg > this._caricoMassimo) {
            console.log('Errore: il carico supera il carico massimo del camion.');
            return;
        }
        console.log('Carico attuale: ' + this._caricoAttuale + ' kg.');
        this._caricoAttuale += kg;
        console.log('Carico aggiunto: ' + kg + ' kg. Carico totale ora: ' + this._caricoAttuale + ' kg.');
    }


}


const auto = new Automobile("Honda", "Civic", 2022);
const camion = new Camion("Volvo", "F12", 2020, 5000, 20000);

console.log(auto instanceof Automobile);  
console.log(camion instanceof Camion);    
console.log(auto instanceof Camion);     
console.log(camion instanceof Automobile);  

console.log(Automobile.verificaIstanza(auto, Automobile));  
console.log(Automobile.verificaIstanza(camion, Camion));   
