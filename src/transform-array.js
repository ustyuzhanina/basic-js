import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const newArr = arr.slice();
    let resArr = [];

    function operate(i, item) {
        switch (item) {
            case "--discard-next":
                break;
            case "--discard-prev":
                if (newArr[i - 1]) {
                    if (newArr[i - 2] !== "--discard-next") {
                        resArr.pop();
                    }
                }
                break;
            case "--double-next":
                if (newArr[i + 1]) {
                    resArr.push(newArr[i + 1]);
                }
                break;
            case "--double-prev":
                if (newArr[i - 1] && newArr[i - 2] !== "--discard-next") {
                    resArr.push(newArr[i - 1]);
                }

                break;
            default:
                if (newArr[i - 1] !== "--discard-next") {
                    resArr.push(newArr[i]);
                }
                break;
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        operate(i, newArr[i]);
    }


    return resArr;
}