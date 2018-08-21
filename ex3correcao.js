let degraus = Number(prompt("Quantos degraus você quer na escadinha?"));
let caracter = prompt("Qual o símbolo do material da escadinha?");
let escadinha = caracter;
let i = 1;

while (i <= degraus) {
    console.log(escadinha);
    escadinha += caracter; // ou escadinha = escadinha + caracter; 
    i++;
}