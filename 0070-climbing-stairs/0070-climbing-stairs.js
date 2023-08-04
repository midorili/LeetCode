/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var stairs = [1, 2]
    for (var i = 2; i < n; i++) {
        stairs[i] = stairs[i-1] + stairs[i-2]
    }
    return stairs[n - 1]
};