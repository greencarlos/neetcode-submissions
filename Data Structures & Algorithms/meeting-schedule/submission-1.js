/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const set = new Set()

        for (let interval of intervals) {
           // console.log('int', interval)
            const {start, end} = interval

            for (let i = start; i < end; i++) {
                if (set.has(i)) return false 
                set.add(i)
            }
        }

        return true 
    }
}
