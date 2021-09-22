import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    //create object with files and counts
    const library = {};

    //go through an array of files and check whether the obj above has such name, add uniques, change the name of existing
    return names.map(file => {

        let fileName;
        if (file in library) {
            library[file] = library[file] + 1;
            fileName = `${file}(${library[file]})`
            library[fileName] = 0;
        } else {
            library[file] = 0;
            fileName = file;
        }

        return fileName;
    })

}