const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let res = '',
        repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1,
        separator = (options.separator !== undefined) ? options.separator : '+',
        addition = (options.addition !== undefined) ? String(options.addition) : '',
        additionRepeatTimes = (options.additionRepeatTimes != undefined) ? options.additionRepeatTimes : 1,
        additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
    str = String(str);

    for (let i = 0; i < repeatTimes; i++) {
        res += str;
        for (let k = 0; k < additionRepeatTimes; k++) {
            res += addition;
            // at last iteration exclude additionSeparator 
            if (k < (additionRepeatTimes - 1)) {
                res += additionSeparator;
            }
        }
        // at last iteration exclude separator 
        if (i < (repeatTimes - 1)) {
            res += separator;
        }
    }
    return res;
};