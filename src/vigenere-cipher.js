const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(machine = true) {
        this.direct = machine;
    }
    encrypt(message, key) {
        return this.crypt(message, key, true);
    }

    decrypt(message, key) {
        return this.crypt(message, key, false);
    }

    crypt(message, key, mode) {
        if (!arguments) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();

        let res = [];
        let idx = 0;
        for (let i = 0; i < message.length; i++) {
            let charCode = message[i].charCodeAt(0);
            if (charCode >= 65 && charCode <= 90) {
                if (mode) {
                    // encrypt mode
                    res.push(String.fromCharCode((charCode + key.charCodeAt(idx)) % 26 + "A".charCodeAt(0)));
                } else {
                    // decrypt mode
                    res.push(String.fromCharCode((charCode + 26 - key.charCodeAt(idx)) % 26 + "A".charCodeAt(0)));
                }
                (idx != key.length - 1) ? idx++ : idx = 0;
            } else {
                res.push(message[i]);
            }
        }
        return (this.direct) ? res.join('') : res.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;