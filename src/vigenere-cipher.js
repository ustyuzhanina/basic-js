import {
    NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
    constructor(direct) {
        this.type = String(direct) === "false" ? "reverse" : "direct";
        this.encrypt = this.encrypt.bind(this);
        this.decrypt = this.decrypt.bind(this);
        this.error = "Incorrect arguments!";
        this.alphabet = [
            65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        ];
    }
    encrypt(message, key) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!(message && key)) {
            throw new Error(this.error);
        }

        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf).toUpperCase();

        const preArr = message.toUpperCase().split("");
        let count = 0;

        const array = preArr.map(item => {
            let resLetter;
            if (/[A-Z]/.test(item)) {
                item.replace(/[A-Z]/, (match) => {
                    const letterIdx = match.charCodeAt(0) - this.alphabet[0];
                    const shift = key.charCodeAt(count) - this.alphabet[0];
                    count++;
                    resLetter = String.fromCharCode(this.alphabet[0] + (letterIdx + shift) % this.alphabet.length);
                })
            } else {
                resLetter = item;
            }
            return resLetter;
        });

        return this.type === "reverse" ? array.reverse().join("") : array.join("");
    }

    decrypt(encryptedMessage, key) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!(encryptedMessage && key)) {
            throw new Error(this.error);
        }

        let kf = Math.ceil(encryptedMessage.length / key.length);
        key = key.repeat(kf).toUpperCase();

        const preArr = encryptedMessage.toUpperCase().split("");
        let count = 0;

        const array = preArr.map(item => {
            let resLetter;
            if (/[A-Z]/.test(item)) {
                item.replace(/[A-Z]/, (match) => {
                    const letterIdx = match.charCodeAt(0) - this.alphabet[0];
                    const shift = key.charCodeAt(count) - this.alphabet[0];
                    count++;
                    resLetter = String.fromCharCode(this.alphabet[0] + (letterIdx - shift + this.alphabet.length) % this.alphabet.length);
                })
            } else {
                resLetter = item;
            }
            return resLetter;
        });

        return this.type === "reverse" ? array.reverse().join("") : array.join("");

    }
}