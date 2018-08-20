//Ex 3 Desenhe uma escadinha no console! Usar console.log
//Perguntar ao usuário quantos degraus deve ter a escadinha e desenha nas linhas do console
// Exemplo: uma escada de tamanho 5 
// #
// ##
// ###
// ####
// #####

// BONUS: Perguntar qual o simbolo que ele quer como degrau

let caracter = prompt("Qual caracter você quer na sua escada?");
let num_degraus = prompt("Quantos degraus você quer na escada?");
let i = 1;

while(i <= num_degraus) {
    if (isNaN(Number(num_degraus)) || num_degraus == null) {
        num_degraus = prompt("Digite um número (quantidade de degraus você quer na escada)");
    }
    console.log(caracter.repeat(i));
    i++;
}
