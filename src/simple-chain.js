import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    buffer: [],

    getLength() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.buffer.length;
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        const ins = String(value) !== "undefined" ? value : "( )";
        this.buffer.push(`( ${ins} )`);
        return this;
    },
    removeLink(position) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (typeof position !== "number" || position % 1 !== 0 || position < 1 || position > this.buffer.length) {
            this.buffer = [];
            throw new Error("You can\'t remove incorrect link!");
        } else {
            const copy = this.buffer.slice();
            this.buffer = this.buffer.slice(0, position - 1).concat(copy.slice(position));
            return this;
        }
    },
    reverseChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.buffer = this.buffer.reverse();
        return this;
    },
    finishChain() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        const result = this.buffer;
        this.buffer = [];
        return result.join("~~");
    }
};