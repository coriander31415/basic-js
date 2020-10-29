const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
    let k = LN2 / HALF_LIFE_PERIOD;
    return (typeof(sampleActivity) !== 'string' ||
            !parseFloat(sampleActivity) ||
            parseFloat(sampleActivity) < 0 ||
            sampleActivity > MODERN_ACTIVITY) ?
        false :
        Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
};