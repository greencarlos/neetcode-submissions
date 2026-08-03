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
    diameterOfBinaryTree(root) {
        let max = 0

        const dfs = (node, count = 0) => {
            if (node === null) return 0
            const left = dfs(node.left, count + 1)
            const right = dfs(node.right, count + 1)
            max = Math.max(max, left + right)
            // console.log('max', max, 'left', left, 'right', right)
            return 1 + Math.max(left, right)
        }

        dfs(root, 0)
        return max
    }
}
