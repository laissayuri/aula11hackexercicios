let numero_secreto = Math.floor(Math.random() * 100 + 1);
let palpite = Number(prompt("Adivinhe o número secreto! (de 1 a 100)"));

while(palpite !== numero_secreto){
    if (palpite > secreto){
        alert("ERROU! O Número é MENOR!");
    } else {
        alert("ERROU! O Número é MAIOR");
    }

    palpite = Number(prompt("Tente Novamente!"));
}

alert("PARABÉNS, ACERTOU!"); //Só vai aparecer depois que o while acabar, ou seja, quando o papite for igual ao número
