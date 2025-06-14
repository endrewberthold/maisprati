let resultadoGerado = false;

function insert(num){
    let display = document.getElementById('display');
    let atual = display.textContent;
    const operadores = ['+', '-', '*', '/', '.', ','];
    const limite = 12;

    //Define o limite de caracteres no display
    if (atual.length >= limite){
        return;
    }
    /*
    Regra para bloquear a entrada de operadores
    como primeiro caractere, exceto "-"
     */
    if (atual.length === 0 && operadores.includes(num) && num !== "-"){
        return;
    }
    /*
    Regra para validar se um resultado foi gerado e o usuário digitou um
    operador, permitindo continuar a operação
     */
    if (resultadoGerado && operadores.includes(num)){
        resultadoGerado = false;
    }
    /*
    Regra para bloquear a inserção de numeros depois de gerar um resultado
    */
    if (resultadoGerado && !operadores.includes(num)){
        return;
    }
    /*
    Regra para impedir operadores em sequencia
     */
    let ultimo = atual[atual.length - 1];
    if(operadores.includes(ultimo) && operadores.includes(num)){
        return;
    }
    display.textContent = atual + num;
}
function calcular(){
    let calculo = document.getElementById('display').textContent;
    if(calculo){
        document.getElementById('display').textContent = eval(calculo);
        resultadoGerado = true;
    }
}
function clean(){
    document.getElementById('display').textContent = '';
    resultadoGerado = false;
}
