/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hashMap = {"(":")", "{":"}", "[":"]"}
    let stack = [];
    for (var i = 0; i < s.length; i++) {
        let ch = s[i];
        if (hashMap[ch]) {
            stack.push(hashMap[ch]) 
        } else if (stack[stack.length-1] === ch ) {
        stack.pop()
        } else {
            return false;
        }
    }
    return stack.length === 0;
};