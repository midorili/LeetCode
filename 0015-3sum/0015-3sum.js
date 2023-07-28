/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b)
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i-1]) {
            continue;
        }
        // for (var j = i+1; j < nums.length; j++) {
        //      if (j > i+1 && nums[j] == nums[j-1]) {
        //     continue;
        // }
        //     for (var k = j+1; k < nums.length; k++) {
        //      if (k > j+1 && nums[k] == nums[k-1]) {
        //     continue;
        // }
        //         if (nums[i] + nums[j] + nums[k] === 0) {
        //             res.push([nums[i], nums[j], nums[k]])
        //         }
        //     }
        // }
        var target = 0 - nums[i];
        var left = i + 1;
        var right = nums.length - 1;
        while (right > left) {
            var sum = nums[left] + nums[right];
            if (sum > target) {
                right --;
            } else if (sum < target) {
                left ++
            } else{
                res.push([nums[i], nums[left], nums[right]])
                while(nums[left] === nums[left+1]) left++
                while(nums[right] === nums[right+1]) right--
                left++;
                right--;

            }
        }
    }
    
    return res; 
};