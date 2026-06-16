class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = []

        for (let i = 0; i <= nums.length - k; i++) {
            const clone = nums.slice(i, i + k)
            result.push(Math.max(...clone))
        }

        return result
    }
}
