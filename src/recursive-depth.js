const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        let curr = 1;

        arr.forEach(el => {
            if (Array.isArray(el)) {
                curr = this.calculateDepth(el);
                if (depth < curr) {
                    depth = curr;
                }
            }
        });
        return depth += 1;
    }
};