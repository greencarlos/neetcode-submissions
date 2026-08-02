class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        for (let ch of s) {
            const last = stack[stack.length - 1]
            if (last === '[' && ch === ']') {
                stack.pop()
            } else if (last === '(' && ch === ')') {
                stack.pop()
            } else if (last === '{' && ch === '}') {
                stack.pop()
            } else {
                stack.push(ch)
            }
        }
        return stack.length === 0
    }
}
