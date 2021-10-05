<h1>Maximun Subarray</h1>;

<div>
  Given an integer array nums, find the contiguous subarray (containing at least
  one number) which has the largest sum and return its sum
</div>;
<p>A subarray is a contiguous part of an array.</p>;
//Subarray는 array안에 존재하는 또 다른 array이다. 배열안 전체 값이 될 수도 배열안 2개만이 subarray가 될 수도 있는 것이다.

<p>Example 1:</p>;
<div>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]</div>;
<div>Output: 6</div>;
<p>why? [4,-1,2,1] has the largest sum =6</p>;
// 배열에서 가장 큰 숫자가 무엇인지 확인한 후, 연속된 숫자들을 더했을 때 가장 큰 수가 나와야 한다.

<p>Example 2:</p>;
<div>Input: nums = [1]</div>;
<div>Output: 1</div>;

<p>Example 3:</p>;
<div>Input: nums = [5,4,-1,7,8]</div>;
<div>Output: 23</div>;
//위 배열의 경우 아예 배열값들을 다 더하는 것이 가장 큰 숫자다.
// Kadane's Algorithm
let maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    // Math.max함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환한다.
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};
