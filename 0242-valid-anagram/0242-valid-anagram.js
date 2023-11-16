/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var splitS = s.split('').sort().join('')
    var splitT = t.split('').sort().join('')
    
    if (splitS === splitT) {
        return true;
    }
    
    return false;
};