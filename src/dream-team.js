const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    return (!Array.isArray(members)) ? false : members
        .filter(name => typeof(name) === 'string')
        .map(name => name
            .trim()[0]
            .toUpperCase())
        .sort()
        .join('');

};

// check if members is array
// check if members' elements are string 
// reduce whitespaces!
// get and capitalize first letters of each name