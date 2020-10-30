const CustomError = require("../extensions/custom-error");

const chainMaker = {

    chain: [],

    //returns the current chain length as a number
    getLength() {
        return this.chain.length;
    },

    // adds a link containing a string representation of the value to the chain
    // if addLink is called with no arguments, it adds an empty link ('( )') to the chain
    addLink(value) {
        this.chain.push('( ' + value + ' )');
        return this;
    },

    // removes a chain link in the specified position
    // if method accepts invalid position, throw an Error
    removeLink(position) {
        if (this.chain[position - 1] === undefined) {
            this.chain = [];
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },

    // reverses the chain
    reverseChain() {
        this.chain.reverse();
        return this;
    },

    // ends the chain and returns it, existing chain must be deleted
    finishChain() {
        let chainStr = this.chain.join('~~');
        this.chain = [];
        return chainStr;
    }
};

module.exports = chainMaker;

console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()); // => '( 2 )~~( 1 )~~( 3 )'
console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()); // => '( 2 )~~( 3 )'
console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain()); // => '( 1 )~~( 2 )~~( 3 )'