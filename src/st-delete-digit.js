import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arr = String(n).split("");
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        const copy = arr.slice();
        copy.splice(i, 1, "");
        const cutNum = Number(copy.join(""));
        if (max < cutNum) {
            max = cutNum;
        }
    }

    return max;
}