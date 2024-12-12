let score = parseInt(prompt("Inserisci il tuo punteggio:"));

switch(true) {
    case (score >= 90 && score <=100):
        console.log("Voto ottimo");
        break;

        case (score >= 70 && score <= 89):
            console.log ("Voto buono");
            break;

            case (score >= 60 && score <= 69):
                console.log("Voto sufficiente");
                break;

                case (score <= 59):
                    console.log ("Voto insufficiente");
                    break;

                    default:
                        console.log ("Punteggio non valido");
}