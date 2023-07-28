/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var tracker = {}
    var res = []
    for (var i = 0; i < nums.length; i++) {
        var stringNum = nums[i].toString()
        if (tracker[stringNum] === undefined) {
            tracker[stringNum] = 1; 
        } else {
            tracker[stringNum]++;
        }
    }
    // Sort unique elements based on frequency in descending order
    var sortedKeys = Object.keys(tracker).sort((a, b) => tracker[b] - tracker[a]);
    
    // Return the first k elements from the sorted list
    return sortedKeys.slice(0, k).map(Number);
    
//     var val = Object.values(tracker).sort().reverse();
//     var valueCount = 0;
//     console.log(tracker)
//     var helper = function () {
//         for (var key in tracker) {
//         if (tracker[key] === val[valueCount]) {
//             if (!res.includes(Number(key)) && res.length <= k) {
//             res.push(Number(key))
//             delete tracker[key]
//             }
//         }
//     }
    
//     }

//     while (res.length < k) {
//         helper()
//         valueCount++;
//     }
    
//     return res
};