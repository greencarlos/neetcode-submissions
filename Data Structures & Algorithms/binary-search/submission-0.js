class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0
        let high = nums.length

        while(low < high) {
            const mid = Math.floor((low + high) / 2)

            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                high--
            } else if (nums[mid] < target) {
                low++
            }
        }

        return -1
    }
}
