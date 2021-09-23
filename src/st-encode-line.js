import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * encodeLine("aabbbc")
 */
export default function encodeLine(str) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const strArray = str.split('');
    //strArray.push('!');
    let letterCount;
    const result = [];



    for (let i = 0; i <= strArray.length; i++) {
        const previous = strArray[i - 1];
        const current = strArray[i];

        if (current === previous) {
            //console.log(current);
            letterCount[current] = letterCount[current] + 1;
            //console.log(letterCount)

        } else {
            console.log(String(current));

            if (String(current) !== "undefined") {
                letterCount[current] = 1;
                console.log(letterCount);
                const insert = letterCount[previous] === 1 ? previous : letterCount[previous] + previous;
                //console.log(insert);
                result.push(insert);
                letterCount = {};
            }

        }

    }

    return result.join('');

}