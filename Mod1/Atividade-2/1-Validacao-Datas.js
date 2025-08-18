const prompt = require('prompt-sync')();

let data = {
    day: Number(prompt('Dia: ')),
    month: Number(prompt('Mês: ')),
    year: Number(prompt('Ano: '))
};

function ehDataValida(data) {
    let { day, month, year } = data;

    if (
        typeof day !== 'number' || typeof month !== 'number' || typeof year !== 'number' ||
        isNaN(day) || isNaN(month) || isNaN(year)
    ) {
        return false;
    }

    if (day <= 0 || month <= 0 || year <= 0 || month > 12) {
        return false;
    }

    // Verifica se o ano é bissexto
    let bissexto = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    let diasPorMes = [0, 31, (bissexto ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day <= diasPorMes[month]) {
        console.log(`${day}-${month}-${year}${bissexto ? ' | Ano Bissexto' : ''}`);
        return true;
    }

    return false;
}

let dataValida = ehDataValida(data);
console.log(dataValida);
