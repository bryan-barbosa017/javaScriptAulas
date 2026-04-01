/*****************************************************
            Exercícios para fixação
*****************************************************/
/*
1. Crie uma variável e atribua o nome de uma pessoa;
2. Crie uma variável e atribua o nome de um banco;
3. Crie uma variável e atribua o número da agência;
4. Crie uma variável e atribua o número da conta;
5. Crie uma variável e atribua o saldo da conta;
6. Imprima(mostre) os dados e o saldo da conta;
7. Efetue e imprima 5 movimentações na conta;
8. Imprima novamente os dados e o saldo da conta;
9. Crie uma variável para calcular o total depositado e outra para o total sacado, e exiba esses valores;
*/

var nomePessoa = "Ronaldo Borges";
var nomeBanco = "Banco São José";
var numeroAgencia = "16323";
var numeroConta = "1000-92";
let saldo = 500;

let movi1 = saldo - 100;
let movi2 = saldo + 50;
let movi3 = saldo + 30;
let movi4 = saldo - 40;
let movi5 = saldo - 25;
let saldoNovo = saldo - 100 + 50 + 30 - 40 - 25;
let gastos = 100 + 40 + 25;
let ganhos = 50 + 30;
let prejuizo = gastos - ganhos;

console.log("Sistema Bancário\n");

console.log("O usuário do",nomeBanco,"chamado",nomePessoa,"com o número da agência",numeroAgencia,"e número da conta",numeroConta,"possui",saldo,"reais na conta.\n");

console.log(nomePessoa,"mandou um pix de 50 reais para seu irmão","\nRecebeu 100 reais de seu patrão","\nGanhou 30 reais de sua mãe","\nGastou 40 reais no mercado","\nComprou uma roupa de 25 reais\n");

console.log("O usuário do",nomeBanco,"chamado",nomePessoa,"com o número da agência",numeroAgencia,"e número da conta",numeroConta,"possui",saldoNovo,"reais na conta.\n");

console.log(nomePessoa,"gastou",gastos,"reais e ganhou",ganhos,"reais, ficando com um prejuízo de",prejuizo);