class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo=[0,1,2,3]) {
        if (n <= 3) return n
        for (let i = 3; i <= n; i++) {
            memo[i] = memo[i - 1] + memo[i - 2]
        }
        return memo[n]
    }
}
