// snack 1
const vips = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
const invitati = [];
const tavolo = "Tavolo Vip";
for (let i = 0; i < vips.length; i++){
    invitati.push(
        {
            guestName: vips[i],
            tableName: tavolo,
            place: i + 1
        }
    )
}
console.log(invitati)
function displaySegnaPosto(invitati){
    const lista = document.getElementById("lista")
        lista.innerHTML += `
        <ul>
            <li> Guest Name: ${invitati.guestName} </li>
            <li> Table Name: ${invitati.tableName} </li>
            <li> Place: ${invitati.place} </li>
        </ul>
        `;
}

/*
vips.forEach((vip, index, array) => {
    array[index] = {
        name: vip,
        place: index + 1,
        table: tavolo
    }
});
*/
invitati.forEach((vip) => displaySegnaPosto(vip)) 


/*
const placeHolders = vips.map((vip,index) => {
    const placeholder = {
        guest: vip,
        table: tavolo,
        place: index + 1
    }
    return placeholder
});
console.log(placeHolders)
*/

//snack 2
const students = [
    {
        Id: 213,
        Name: "Marco della Rovere",
        Grades: 78 
    },
    {
        Id: 110,
        Name: "Paola Cortellessa",
        Grades: 96
    },
    {
        Id: 250,
        Name: "Andrea Mantegna",
        Grades: 48
    },
    {
        Id: 145,
        Name: "Gaia Borromini",
        Grades: 74
    },
    {
        Id: 196,
        Name: "Luigi Grimaldello",
        Grades: 68
    },
    {
        Id: 102,
        Name: "Piero della Francesca",
        Grades: 50
    },
    {
        Id: 120,
        Name: "Francesco de Polenta",
        Grades: 84
    }
];

const nameUpperCase = students.map((studenti) => {
    const upperList = document.getElementById("upperList")
    upperList.innerHTML += `
    <ul>
        <li> ${studenti.Name.toUpperCase()} </li>
    </ul>
    `;
});

const lista70 = document.getElementById("voto70");
const lista120 = document.getElementById("votoId120");
const voto70 = students.filter(checkVoto);
console.log(voto70);
function checkVoto(studenti){
    return studenti.Grades > 70;
}
const listaVoti = JSON.stringify(voto70);
lista70.innerHTML = "Studenti con Grades > 70: <br>" + listaVoti;

const voto70AndId120 = students.filter((studenti) => studenti.Grades > 70 && studenti.Id > 120);
// const voto70And120 = voto70.filter((studenti) => studenti.Id > 120);
console.log(voto70AndId120);
const listaVotID = JSON.stringify(voto70AndId120);
lista120.innerHTML = "Studenti con Grades > 70 e Id > 120: <br>" + listaVotID;

//snack 3
// const bike = ["Bianchi Oltre RC", "Look 795", "Willer O", "Pinarello Dogma F", "Colnago V4Rs"]
// const weight = [6.8, 7.2, 6.9, 8.6, 7.4];

// bike.forEach((bycicle, index, array)=>{
//     array[index] = {
//         bycicle,
//         w: weight[index]
//     }
// })
// console.log(bike)

// const racingBikes = bike.map((bycicle, index) => {
//     const racingBike = {
//         bikeName: bycicle,
//         weightBike: weight[index]
//     }
//     return racingBike
// });

const racingBikes = [
    {
        name: "Bianchi Oltre RC",
        weight: 6.8
    },
    {
        name: "Look 795",
        weight: 7.2
    },
    {
        name: "Willer 0",
        weight: 6.9
    },
    {
        name: "Pinarello Dogma F",
        weight: 8.6
    },
    {
        name: "Colnago V4Rs",
        weight: 7.4
    }
]
const {weight} = racingBikes;
console.log(weight);

//snack 4 
const teams = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0
    }
]

const teamStatistics = teams.map((team) => {
    const teamStatistic = {
        name: team,
        points: getRndInteger(0,100),
        fouls: getRndInteger(0,100)
    }
    return teamStatistic
})
console.log(teamStatistics)


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }







