let idade = Number(prompt("Digite a sua idade"));
let renda = Number(prompt("Digite a sua renda"));
let valor = Number(prompt("Digite o valor que quer emprestar"));

if (idade >= 21 && idade <= 60 && renda >= 1500 && valor >= 1000 && valor <= renda*20) {
    alert("Empréstimo Aprovado!");
    
    let num_parcelas = prompt("Digite o número de parcelas que você quer dividir o valor");
    let valor_total = valor * (1 + 0.06) ** num_parcelas;

    alert(`Você deverá pagar um total de R$${valor_total.toFixed(2)},dividido em ${num_parcelas} parcelas de R$${(valor_total/num_parcelas).toFixed(2)}`);

} else {
    alert("Empréstimo Não Aprovado!");
}




//Verificando pelos casos que dão errado!
// if (idade < 21 || idade > 60 || renda < 1500 || valor < 1000 || valor > renda*20) {
//     alert("Empréstimo Não Aprovado!");
// } else {
//     alert("Empréstimo Aprovado!");
// }