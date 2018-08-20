// Ex2 Advinhe um numero
// Você vai definir um número secreto em uma váriavel, e vai pedir ao usuário que adivinhe que numero é. Seu programa permite que
// o usuario digite um numero, e responde "MAIOR" se o numero for menor que o secreto e "MENOR" se o número for maior que o secreto. Se o 
// número for igual, responde "ACERTOU" e finaliza.

//BONUS: Procurar na internet como fazer para gerar o numero de 1 a 100 de forma aleatoria.

let num_adivinhe = Math.floor(Math.random() * 100);
let num_usuario = Number(prompt("Digite um número de 1 a 100"));

while (num_adivinhe != num_usuario) {
    if (num_usuario > num_adivinhe) {
        num_usuario = Number(prompt("É um número MENOR. Tente Novamente."));
    }
    if (num_usuario < num_adivinhe){
        num_usuario = Number(prompt("É um número MAIOR. Tente Novamente."));
    }
    if (isNaN(Number(num_usuario)) || num_usuario == null) {
        num_usuario = Number(prompt("Digite um NÚMERO entre 1 a 100. Tente Novamente."));
    }
}

if (num_adivinhe == num_usuario){
    console.log(`Você acertou! O número é ${num_adivinhe}!`);
}