class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visited = {}

        for (let i = 0; i < nums.length; i++) {
            if (visited[target - nums[i]] > -1) return [i, visited[target - nums[i]]]

            visited[nums[i]] = i
        }
        return []
    }
}
