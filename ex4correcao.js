let meninos = ["Renan", "Kleber", "Ramon", "Ademir"];
let meninas = ["Katia", "Lorena", "Solange", "Ludmilla"];

let i = 0;
let k = 1;

while (i < meninos.length){
    let j = 0;
    while (j < meninas.length) {
        console.log(`${k}: ${meninos[i]} e ${meninas[j]}`);
        j++;
        k++;
    }
    i++;
}

console.log("fim");