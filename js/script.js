// snack 1
const vips = [
    {
        guestName: 'Brad Pitt',
        tableName : 'Tavolo Vip',
        place: 1

    },
    {
        guestName: 'Johnny Depp',
        tableName : 'Tavolo Vip',
        place: 2

    },
    {
        guestName: 'Lady Gaga',
        tableName : 'Tavolo Vip',
        place: 3

    },
    {
        guestName: 'Cristiano Ronaldo',
        tableName : 'Tavolo Vip',
        place: 4

    },
    {
        guestName: 'Georgina Rodriguez',
        tableName : 'Tavolo Vip',
        place: 5

    },
    {
        guestName: 'Chiara Ferragni',
        tableName : 'Tavolo Vip',
        place: 6

    },
    {
        guestName: 'Fedez',
        tableName : 'Tavolo Vip',
        place: 7

    },
    {
        guestName: 'George Cloney',
        tableName : 'Tavolo Vip',
        place: 8

    },
    {
        guestName: 'Amal Clooney',
        tableName : 'Tavolo Vip',
        place: 9

    },
    {
        guestName: 'Maneskin',
        tableName : 'Tavolo Vip',
        place: 10

    }
]


vips.forEach((vip) => displaySegnaPosto(vip)) 


function displaySegnaPosto(vip){
    const lista = document.getElementById("lista")
    lista.innerHTML += `
    <ul>
        <li> Guest Name: ${vip.guestName} </li>
        <li> Table Name: ${vip.tableName} </li>
        <li> Place: ${vip.place} </li>
    </ul>
    `
}



