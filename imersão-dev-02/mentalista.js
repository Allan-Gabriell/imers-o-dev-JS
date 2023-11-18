//var secretNumber = 581;
var secretNumber = parseInt(Math.random()*1001); //Aqui nesta linha de código é para que o Js escolha um valor para eu acertar
//ParseInt - Analise como inteiro
//Math - Matemática
//Random - Randômico(aleatório)
var cont = 0;

while(lock != secretNumber){ //Comando de while(enquanto) para criar um loop
    var lock = prompt('Digite um número entre 1 e 1000:'); //Aqui é tipo um alert, mas o usuário informa algum dado.
    if(secretNumber == lock){
        alert('Parabéns você acertou! O número era ' + secretNumber);
        alert('Você fez ' + cont + ' tentativas!')
    } else if(secretNumber < lock){
        alert('O número é menor!');
    } else if(secretNumber > lock){
        alert('O número é maior!');
    } 
    cont = cont+1;
}