'use strict';

function getNumber(n) {
    if (!Number.isInteger(n) || n < 0 || n > 999) {
        console.log('Заданное значение не входит в определённый диапазон [0..999]!');
        return {};
    }

    return {
        units: n % 10,
        hundreds: Math.floor(n / 100),
        tens: Math.floor(n / 10) % 10,
    }
}
let d = 386;
let num = getNumber(d);
console.log('Число: ' + d);
console.log('Сотни: ' + num.hundreds);
console.log('Десятки: ' + num.tens);
console.log('Единицы: ' + num.units);