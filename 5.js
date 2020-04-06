let app = {
    config:{
    rows: [8, 7, 6, 5, 4, 3, 2, 1],
    cols: [a, b, c, d, e, f, g, h]
},

run() {
    letboard = this.generateBoard();
},

/**
 * Метод генерирует игровое поле 8 на 8.
 * @returns {string} html разметка в виде строки.
*/
generateBoard() {
    let board = '';
    let rowStartWithColor = 'white';
    for (let i = 0; i < this.config.rows.length; i++) {
        if (rowStartWithColor == 'white') {
            row = this.generateRow(rowStartWithColor, this.config.rows[i]);
            rowStartWithColor = 'black';
        } else {
            row = this.generateRow(rowStartWithColor, this.config.rows[i]);
            rowStartWithColor = 'white';
        }
        board += row;
    }
    return `<table><tbody>${board}</tbody></table>`;
},

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейками).
     * @param {string} rowStartWithColor с какого цвета строка начинается от левого края,
     * м.б. "white", "black".
     * @param {number} rowNum номер строки от 8 до 1, т.к. шахматная доска формируется
     * сверху вниз, поэтому номер начинается с 8.
     * @returns {string} html-разметка, тег tr с оформленными внутри тегами td.
     */
    generateRow(rowStartWithColor, rowNum) {
        let currentColorClass = rowStartWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
    return `<tr>${row}</tr>`;
    },
/**
 * Метод генерирует ячейкум(тег td) с нужным классом цвета
 * и координатами на поле.
 * @param {string} color класс цвета ячейки м.б. "white", "black".
 * @param {number} rowNum номер строки игровой доски.
 * @param {string} colChar буква колонки игровой доски.
 * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
 */
    generateField(color, rowNum, colChar) {
        return <td data-rownum="${rowNum}" data-colorchar>
    }, 
};

app.run();