
// Ex 4 Use as seguintes linhas para criar uma lista de meninos e uma lista de meninas
// let meninos = ["Renan", "Keleber", "Ramon", "Ademir"];
// let meninas = ["Katia", "Lorena", "Solange", "Ludmilla"];

// Vai haver uma festa junina e os meninos e meninas
// formarão casais para a quadrilha. Seu código deve mostrar no console todos os casais possíveis para a dança.

// Exemplo:
// "Renan e Katia"
// "Renan e Lorena"
// "Renan e Solange"
// "Renan e Ludmilla"
// .
// .
// .

// let meninos = ["Renan", "Kleber", "Ramon", "Ademir"];
// let meninas = ["Katia", "Lorena", "Solange", "Ludmilla"];
// let i = 0;
// let j = 0;
// let meninos_com_par = 0;

// while (meninos_com_par < meninos.length){
//     console.log(`${meninos[i]} e ${meninas[j]}`);
//     j++
//     if (j == meninas.length){
//         i++;
//         j = 0;
//         meninos_com_par++;
//     }
// }


//usando for

let meninos = ["Renan", "Kleber", "Ramon", "Ademir"];
let meninas = ["Katia", "Lorena", "Solange", "Ludmilla"];
let k = 0;

for (let item1 of meninos){
    for (let item2 of meninas){
        console.log(`${k}: ${item1} e ${item2}`);
        k++;
    }
}