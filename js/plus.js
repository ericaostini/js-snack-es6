/* Snack 2
A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola */

const arrayStringhe = ["Pippo", "PLUTO", "piero", "PAOLO", "Pietro"];
const nuovoArray = arrayStringhe.map((el) => el.substring(0,1).toUpperCase() + el.substring(1).toLowerCase());
console.log(nuovoArray)
const container = document.getElementById("lista");
container.innerHTML += nuovoArray;

/* Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi
*/

const animali = [
    {
        nome: "leone",
        tipo: "felini",
        classe: "mammiferi"
    },
    {
        nome: "Rondine",
        tipo: "valatile",
        classe: "uccelli"
    },
    {
        nome: "delfino",
        tipo: "animali acquatici",
        classe: "mammiferi"
    },
    {
        nome: "lucertola",
        tipo: "squamati",
        classe: "rettili"
    }
]
const animaliMammiferi = animali.filter((animale) => animale.classe === "mammiferi");
console.log(animaliMammiferi)

/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età
*/

const persone = [
    {
        nome: "Erica",
        cognome: "Ostini",
        eta: 23
    },
    {
        nome: "Luca",
        cognome: "Bianchi",
        eta: 16
    },
    {
        nome: "Alberto",
        cognome: "Rossi",
        eta: 34
    },
    {
        nome: "Elisa",
        cognome: "Verdi",
        eta: 15
    }
];
const nuovoArrayGuida = [];
const guidaPersona = persone.map((persona) => persona.eta >= 18)
persone.forEach((persona, index)=>{
    nuovoArrayGuida.push(
        {
            nome: "Elisa",
            cognome: "Verdi",
            eta: 15,
            guida: guidaPersona[index]
        }
        )
    })
    console.log(nuovoArrayGuida)
    