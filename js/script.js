// snack 1
// const vips = [
//     {
//         guestName: 'Brad Pitt',
//         tableName : 'Tavolo Vip',
//         place: 1

//     },
//     {
//         guestName: 'Johnny Depp',
//         tableName : 'Tavolo Vip',
//         place: 2

//     },
//     {
//         guestName: 'Lady Gaga',
//         tableName : 'Tavolo Vip',
//         place: 3

//     },
//     {
//         guestName: 'Cristiano Ronaldo',
//         tableName : 'Tavolo Vip',
//         place: 4

//     },
//     {
//         guestName: 'Georgina Rodriguez',
//         tableName : 'Tavolo Vip',
//         place: 5

//     },
//     {
//         guestName: 'Chiara Ferragni',
//         tableName : 'Tavolo Vip',
//         place: 6

//     },
//     {
//         guestName: 'Fedez',
//         tableName : 'Tavolo Vip',
//         place: 7

//     },
//     {
//         guestName: 'George Cloney',
//         tableName : 'Tavolo Vip',
//         place: 8

//     },
//     {
//         guestName: 'Amal Clooney',
//         tableName : 'Tavolo Vip',
//         place: 9

//     },
//     {
//         guestName: 'Maneskin',
//         tableName : 'Tavolo Vip',
//         place: 10

//     }
// ]
const vips = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
const invitati = [];
const tavolo = "Tavolo Vip"
for (let i = 0; i < vips.length; i++){
    invitati.push(
        {
            guestName: vips[i],
            tableName: tavolo,
            place: i
        }
    )
}
console.log(invitati)
const lista = document.getElementById("lista")
    lista.innerHTML += `
    <ul>
        <li> Guest Name: ${invitati.guestName} </li>
        <li> Table Name: ${invitati.tableName} </li>
        <li> Place: ${invitati.place} </li>
    </ul>
    `


// vips.forEach((vip) => displaySegnaPosto(vip)) 


// function displaySegnaPosto(vip){
//     const lista = document.getElementById("lista")
//     lista.innerHTML += `
//     <ul>
//         <li> Guest Name: ${vip.guestName} </li>
//         <li> Table Name: ${vip.tableName} </li>
//         <li> Place: ${vip.place} </li>
//     </ul>
//     `
// }

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

const upperList = document.getElementById("upperList")
const nameUpperCase = students.map((studenti) => studenti.Name.toUpperCase());
console.log(nameUpperCase);
upperList.innerHTML += nameUpperCase;

const voto70 = students.filter((studenti) => studenti.Grades > 70);
console.log(voto70);

const voto70AndId120 = students.filter((studenti) => studenti.Grades > 70 && studenti.Id > 120);
console.log(voto70AndId120);

    




