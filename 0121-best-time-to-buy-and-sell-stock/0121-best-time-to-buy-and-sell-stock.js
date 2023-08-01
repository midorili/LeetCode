/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    var buy = prices[0];
    var sell = 0;

    for (var i = 1; i < prices.length; i++) {
        buy = Math.min(buy, prices[i]);
        sell = Math.max(sell, prices[i] - buy);
    }

    return sell;
};
