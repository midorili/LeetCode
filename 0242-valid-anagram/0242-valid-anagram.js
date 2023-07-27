/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var arrayOfS = s.split('')
    // var setS = new Set(arrayOfS)
    
    var arrayOfT = t.split('')
    // var setT = new Set(arrayOfT)
    
//     const eqSet = (setS, setT) =>
//     setS.size === setT.size && [...setS].every((x) => setT.has(x))
    
//     if (eqSet) {
//         return true
//     }
//         return false
    var sortedS = arrayOfS.sort().join('')
    var sortedT = arrayOfT.sort().join('')
    
    if (sortedS === sortedT) {
        return true;
    }
    
    return false; 
}
    
   

