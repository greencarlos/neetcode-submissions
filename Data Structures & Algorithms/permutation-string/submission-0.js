class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        s1 = s1.split('').sort().join('')

        for (let i = 0; i < s2.length; i++) {
            const clone = s2.slice(i, i + s1.length).split('').sort().join('')
            // console.log('clone', clone, 's1', s1)

            if (clone === s1) {
                return true
            }
        }

        return false
    }
}
