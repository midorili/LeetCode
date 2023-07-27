/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var lowercase = s.toLowerCase().split(' ').join('').replace(/[^0-9a-z]/gi, '');
    console.log('low', lowercase)
    var reversed = lowercase.split('').reverse().join('').replace(/[^0-9a-z]/gi, '')
    console.log('re', reversed)
    if (lowercase === reversed) {
        return true
    }
    return false;
};