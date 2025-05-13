/*let hoje = new Date();

let dia = String(hoje.getDate()).padStart(2, '0')
let mes = String(hoje.getMonth() + 1).padStart(2, '0')
let ano = hoje.getFullYear()

let dataFormatada = `${dia}/${mes}/${ano}`
console.log(dataFormatada)
*/
const hoje = new Date();
const dataFormatada = hoje.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});
console.log(dataFormatada);

//a soma de duas matrizes