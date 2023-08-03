/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) {
        return false; 
    }
    
    let checker = (treeUno, treeDos) => {
        if (!treeUno && !treeDos) {
            return true;
        }
        
        if (!treeUno || !treeDos || treeUno.val !== treeDos.val) {
            return false; 
        }
        
        return checker(treeUno.left, treeDos.left) && checker(treeUno.right, treeDos.right)
    }
    
    if (checker(root, subRoot)) {
        return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};