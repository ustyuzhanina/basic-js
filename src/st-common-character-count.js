import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr1 = s1.split("");
    let count = 0;

    for (const item of arr1)
        if ((new RegExp(s2.split("").join("|").replace(/^\w*/, "[$&").replace(/\w*$/, "$&]"))).test(item)) {
            count++;
            s2 = s2.replace(item, "");
        }

    return count;
}