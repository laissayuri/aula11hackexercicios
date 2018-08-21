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
let erro_idade;
let erro_renda;
let erro_emprestimo;
let emprestimo_aprovado;
let num_parcelas;
let parcela;
let juros = 0.06;
let total;

idade = Number(prompt("Quantos anos você tem?"));

if (idade >= 22 && idade <= 60){
    console.log("Idade válida");
    erro_idade = false;
}
else if (isNaN(Number(idade)) || idade === null ) {
    console.log("Idade inválida");
    erro_idade = true;
} else {
    console.log("Idade Inválida");
    erro_idade = true;
}

renda = Number(prompt("Qual é a sua renda?"));

if (renda >= 1500) {
    console.log("Renda Válida");
    erro_renda = false;
} 
else if (isNaN(Number(renda)) || idade === null ) {
    console.log("Idade inválida");
    erro_renda = true;
}
else {
    console.log("Renda Inválida");
    erro_renda = true;
}

emprestimo = Number(prompt("Quanto você quer de empréstimo?"));

if (emprestimo >= 1000 && emprestimo <= renda*20) {
    console.log("Valor Permitido");
    erro_emprestimo = false;
}
else if (isNaN(Number(emprestimo)) || idade === null ) {
    console.log("Idade inválida");
    erro_emprestimo = true;
} else {
    console.log("Valor Inválido");
    erro_emprestimo = true;
}

if (erro_idade == false && erro_renda == false && erro_emprestimo == false){
    alert("Empréstimo Permitido");
    emprestimo_aprovado = true;
} else {
    alert("Empréstimo Não Permitido");
    emprestimo_aprovado = false;
}

if (emprestimo_aprovado == true){
    num_parcelas = Number(prompt("Em quantas parcelas mensais com juros de 6% a.m. deseja realizar o pagamento? Você pode escolher entre 1 a 36"));
    if(num_parcelas >= 1 && num_parcelas <= 36){
        parcela = (emprestimo/num_parcelas)+(emprestimo*juros);
        total = emprestimo*(1 + (juros*num_parcelas));
        alert(`Você terá que pagar ${num_parcelas} parcelas de ${parcela} reais, dando um total de ${total} reais`);
    }
}


