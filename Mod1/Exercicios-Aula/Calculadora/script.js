let resultadoGerado = false;

function insert(num){
    let display = document.getElementById('display');
    let atual = display.textContent;
    const operadores = ['+', '-', '*', '/', '.', ','];
    const limite = 12;

    if (resultadoGerado && !operadores.includes(num)){
        return;
    }
    if (resultadoGerado && operadores.includes(num)){
        resultadoGerado = false;
    }
    if (atual.length >= limite){
        return;
    }
    if (atual.length === 0 && operadores.includes(num) && num !== "-"){
        return;
    }
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
