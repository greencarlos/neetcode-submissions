class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = s.split('').reduce((a,c) => {
            a[c] = (a[c] || 0) + 1
            return a
        }, {})

        for (let ch of t) {
            if (freq[ch]) {
                freq[ch]--
            } else {
                freq[ch] = (freq[ch] || 0) + 1
            }
        }

        for (let key in freq) {
            if (freq[key] !== 0) {
                return false
            }
        }
        return true
    }
}
