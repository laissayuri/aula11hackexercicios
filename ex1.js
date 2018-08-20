// Ex1 de IF

// Você trabalha em uma empresa que faz empréstimos. Você deve
// perguntar ao usuário alguns dados (prompt, confirm) e deve emitir
// um ALERT dizendo se o empréstimo foi aprovado ou não.

// O empréstimo é aprovado para pessoas entre 22 e 60 anos, com renda minima de 1500 reais. nâo famos empréstimos de menos de 1000 
// reais e o limite máximo é 20x a renda mensal do cliente.

// Perguntar: idade, renda e quanto vai ser o empréstimo

// BONUS: uma vez aprovado, perguntar o número de parcelas que o cliente deseja pagar (entre 1 e 36). Calcular um juro de 6% ao mês,
// exibir ao final o valor de cada parcela e o valor total do pagamento.

let idade;
let renda;
let emprestimo;
let erroidade;
let errorenda;
let erroemprestimo;

idade = Number(prompt("Quantos anos você tem?"));

if (idade >= 22 && idade <= 60){
    console.log("Idade válida");
    erroidade = false;
}
else if (isNaN(Number(idade)) || idade === null ) {
    console.log("Idade inválida");
    erroidade = true;
} else {
    console.log("Idade Inválida");
    erroidade = true;
}

renda = Number(prompt("Qual é a sua renda?"));

if (renda >= 1500) {
    console.log("Renda Válida");
    errorenda = false;
} 
else if (isNaN(Number(renda)) || idade === null ) {
    console.log("Idade inválida");
    errorenda = true;
}
else {
    console.log("Renda Inválida");
    errorenda = true;
}

emprestimo = Number(prompt("Quanto você quer de empréstimo?"));

if (emprestimo >= 1000 && emprestimo <= renda*20) {
    console.log("Valor Permitido");
    erroemprestimo = false;
}
else if (isNaN(Number(emprestimo)) || idade === null ) {
    console.log("Idade inválida");
    erroemprestimo = true;
} else {
    console.log("Valor Inválido");
    erroemprestimo = true;
}

if (erroidade == false && errorenda == false && erroemprestimo == false){
    console.log("Empréstimo Válido");
} else {
    console.log("Empréstimo Inválido");
}
