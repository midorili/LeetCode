/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let n = nums.length
    
    if (nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0]
    }
    
    
    let dp = new Array(n)
    
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }
    
    
    return dp[n-1]
};