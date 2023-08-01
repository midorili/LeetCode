/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0
    }
    
    let buy = prices[0];
    let sell = 0;
    
    for (var i = 1; i < prices.length; i++) {
       buy = Math.min(buy, prices[i])
       sell = Math.max(sell, prices[i]-buy)
    }
    
    return sell; 
}
