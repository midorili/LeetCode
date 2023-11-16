/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var seen = {};
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]] === undefined) {
            seen[nums[i]] = nums[i]
        } else {
            return true;
        }
    }
    return false; 
};