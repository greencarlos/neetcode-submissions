class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num = +digits.join('')
        num += 1
        return `${num}`.split('').map(x => +x)
    }
}
