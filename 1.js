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
console.log(getNumber(357));