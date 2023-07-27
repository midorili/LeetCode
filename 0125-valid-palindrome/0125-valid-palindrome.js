/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var lowercase = s.toLowerCase().split(' ').join('').replace(/[^0-9a-z]/gi, '');
    var reversed = lowercase.split('').reverse().join('').replace(/[^0-9a-z]/gi, '')
    if (lowercase === reversed) {
        return true
    }
    return false;
};