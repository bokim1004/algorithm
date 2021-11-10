<div>
  You are given an array prices where prices[i] is the price of a given stock on
  ith day. You want to maximize your profit by choosing a single day to buy one
  stock and choosing a different day in the future to sell that stock. Return
  the maximum profit you can achieve from this transaction. If you cannot
  achieve any profit, return 0.
</div>;

<div>
  Example 1: Input: prices=[7,1,5,3,6,4] Output:5 Explanation:Buy on day 2(price
  =1) and sell on day 5(price=6),profit = 6-1 =5. Note that buying on day 2 and
  selling on day 1 is not allowed because you must buy before you sell.
</div>;

<div>
  Input:prices=[7,6,4,3,1] Output:0 Explanation:In this case, no transactions
  are done and the max profit =0/
</div>;

var maxProfit = function (prices) {
  //maximum price를 저장할 변수를 만든다.
  let maxProfit = 0;
  // 가장작은 price 값을 가진 변수를 만들고 배열의 가장 첫번째 값을 set해준다.
  let minPrice = prices[0];
  //selling price를 1으로 시작해서 prices array를 for문으로 돌린다.
  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell];
    //profit을 얻기 위해서는 sellPrice에서 minPrice를 빼야한다.
    let profit = sellPrice - minPrice;
    //만약 profit이 max profit보다 큰 경우, MaxProfit value를 profit value로 대체한다.
    //Math.max()함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
    maxProfit = Math.max(maxProfit, profit);
    if (sellPrice < minPrice) minPrice = sellPrice;
  }
  return maxProfit;
};
