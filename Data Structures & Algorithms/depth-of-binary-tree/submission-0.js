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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        let max = 0

        const dfs = (node, level=1) => {
            if (!node) return 

            max = Math.max(level, max)

            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
        }

        dfs(root)
        return max
    }
}
