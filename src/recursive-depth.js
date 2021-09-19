import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            if (arr.length > 0) {
                let res = 1 + Math.max(...arr.map(this.calculateDepth.bind(this)));
                return res;
            } else {
                return 1;
            }
        } else {
            return 0;
        }


    }
}