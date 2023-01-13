var numberTofind = 0;
var attemps = 1;

function refresh(){
    // gerar numero aleatório

    numberTofind = parseInt(Math.random() * 10);

    console.log(numberTofind)

}

function verifyNumber(){
    // checar numero

    var bet = document.getElementById('bet').value;

    if( bet > 10 || bet < 1){

    alert('Número inválido')

    }
    if( numberTofind < bet){
        attemps++;
        alert('O Número Procurado é Menor')
        
    }
    else if(numberTofind > bet){
        attemps++;
        alert('O Número Procurado é Maior')
    }
    else{
        alert('Parabéns Você acertou o Número, com ' +attemps+ ' Tentativas')
    }

}
refresh();