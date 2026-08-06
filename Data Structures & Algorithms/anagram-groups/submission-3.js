class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}

        for (let str of strs) {
            const val = str.split('').sort().join('')

            if (!groups[val]) {
                groups[val] = [str]
            } else {
                groups[val].push(str)
            }
        }

        return Object.values(groups)
    }
}
