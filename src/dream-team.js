import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = false;

    if (Array.isArray(members)) {
        const arr = members.filter(item => typeof item === "string");

        if (arr.length > 0) {
            result = arr.map(item => item.replace(/ /g, "")[0].toUpperCase()).sort().join("");
        }
    }



    return result;
}