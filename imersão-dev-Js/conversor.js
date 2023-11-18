var cotReal =5.32;

var name = prompt('Informe seu nome: ');

var moneyDollar = prompt('informe o valor em dollares:');

var coverterMoney = moneyDollar * cotReal;

if(name === null || name === ""){
    alert('Você não informou o seu nome!');
    name = prompt('informe novamente!');
} else {
    coverterMoney = coverterMoney.toFixed(2) // Aqui eu arredondo o valor gerado pela maquina para apenas 2 digitos pós vírgula

    alert('Olá, ' + name + ' o valor convertido é R$' + coverterMoney);
}