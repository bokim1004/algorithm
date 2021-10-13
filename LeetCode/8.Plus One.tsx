<h1>Plus One</h1>;

<div>
  You are given a large integer represented as an integer array didgits, where
  each digits[i] is the ith digit of the integer. The digits are ordered from
  most significant to least significant in left to right order. The large
  integer does not contain any leading 0's. Increment the large integer by one
  and return the resulting array of digits.
</div>;

<span>Example 1:</span>;

<div>
  Input:digits=[1,2,3] Output:[1,2,4] Explanation:The array represents the
  integer 123. Incrementing bt one gives 123+1 =124. Thus,the result should be
  [1,2,4].
</div>;
<span>Example 2:</span>;
<div>
  Input:digits=[4,3,2,1] Output:The array represents the integer 4321.
  Incrementing by one gives 4321+1=4322. Thus, the result should be [4,3,2,2].
</div>;

<span>Example 3:</span>;
<div>
  Input:digits=[0] Output:[1] Explanation: The array represents the integer 0.
  Incrementing by one gives 0 +1 =1. Thus, the result should be [1].
</div>;

<span>Example 4:</span>;
<div>
  Input:digits =[9] Output:[1,0] Explanation:The array represents the integer 9.
  Incrementing by one gives 9 +1 =10. Thus, the result should be [1,0].
</div>;

<div>Answer</div>;

var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    //맨마지막 배열의 숫자가 9보다 작다면 1을 더한 값을 리턴하고,
    if (digits[digits.lenth - 1] < 9) return digits++;
    //배열에 1을 더한게 9보다 크다면 그 값은 0이다.
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  //unshift메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고 새로운 길이를 반환한다.
  digits.unshift(1);
  return digits;
};
