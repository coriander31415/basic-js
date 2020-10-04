const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let number = 0;
    number = backyard.flat().filter(cats => cats === '^^').length;
    return number;
}