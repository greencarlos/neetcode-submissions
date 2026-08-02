class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().split('').filter(x => x.match(/[A-za-z0-9]/g)).join('')
        let left = 0
        let right = s.length - 1
        //console.log('s', s)

        while(left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
}
