/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let result = true

        const dfs = (n1, n2) => {
            if (!n1 && !n2) return 
            if (n1 === null && n2 !== null) {
                result = false
                return
            }
            if (n1 !== null && n2 === null) {
                result = false
                return
            }
            if (n1.val !== n2.val) {
                result = false
                return
            }
            //console.log('1', n1.val, '2', n2.val)
            dfs(n1.left, n2.left)
            dfs(n1.right, n2.right)
        }

        dfs(p, q)
        return result
    }
}
