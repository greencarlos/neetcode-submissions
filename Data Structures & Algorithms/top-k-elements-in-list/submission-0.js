class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = []
        const freq = nums.reduce((a,c) => {
            a[c] = (a[c] || 0) + 1
            return a
        }, {})

        const entries = Object.entries(freq)

        entries.sort((a,b) => b[1] - a[1])
        console.log('entries', entries)

        for (let i = 0; i < k; i++) {
            result.push(entries[i][0])
        }
        return result
    }
}
