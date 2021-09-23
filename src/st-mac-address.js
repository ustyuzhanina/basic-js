import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const array = n.split('-');

    if (array.length !== 6) {
        return false;
    }

    let result;

    for (let i = 0; i < array.length; i++) {
        if (array[i].length !== 2) {
            return false;
        }

        let regex = /[0-9A-F][0-9A-F]/;
        if (!regex.test(array[i])) {
            result = false;
            break;
        }
        result = true;
    }

    return result;
}