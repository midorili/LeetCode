/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var resultMap = {};
  
  for (var i = 0; i < strs.length; i++) {
    var sortedWord = strs[i].split('').sort().join('');
    
    if (resultMap[sortedWord]) {
      resultMap[sortedWord].push(strs[i]);
    } else {
      resultMap[sortedWord] = [strs[i]];
    }
  }
  
  // Convert the object values (arrays of grouped anagrams) to the final result array
  var result = Object.values(resultMap);
  return result;
};