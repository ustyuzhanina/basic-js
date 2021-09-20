import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let {
        repeatTimes = 1,
            separator = "+",
            addition,
            additionRepeatTimes = 1,
            additionSeparator = "|",
    } = options;

    const string = typeof str === "string" ? str : String(str);

    let additionString;
    if (String(addition) !== "undefined") {
        additionString = typeof addition === "string" ? addition : String(addition);
    } else {
        additionString = "";
    }

    const repetitionArr = [];

    if (additionString) {
        for (let i = 1; i <= additionRepeatTimes; i++) {
            repetitionArr.push(additionString);
        }
    }

    const insert = additionString ? repetitionArr.join(additionSeparator) : "";

    const resArr = [];

    for (let i = 1; i <= repeatTimes; i++) {
        resArr.push(string + insert);
    }

    const result = resArr.join(separator);


    return result;
}