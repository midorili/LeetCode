/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if (nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }
    
     var robHelper = function(nums, start, end) {
        let currMax = 0;
        let prevMax = 0;
        
        for (let i = start; i <= end; i++) {
            let temp = currMax;
            currMax = Math.max(nums[i] + prevMax, currMax) 
            prevMax = temp; 
        }
        
        return currMax;
    }
     
    let max1 = robHelper(nums, 0, nums.length - 2)
    
    let max2 = robHelper(nums, 1, nums.length - 1)  
    
   return Math.max(max1, max2)
    
 
   
};