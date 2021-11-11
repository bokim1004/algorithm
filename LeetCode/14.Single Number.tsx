<div>
  Given a non-empty array of integers nums, every element appears twice except
  for one. Find that single one. You must implement a solution with a linear
  runtime complexity and use only constant extra space.
</div>;

<div>Example 1: INput: nums = [2,2,1] Output:1</div>;

<div>Example 2 Input:nums=[4,1,2,1,2] Output:4</div>;

<div>Example 3 Input: nums =[1] Output:1</div>;

var singleNumber = function (nums) {
  //nums배열에 값이 한개만 있는 경우 nums[0]만 리턴하면 된다.
  if (nums.length === 1) return nums[0];

  let result = [];
  //순차적으로 숫자를 배열
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      result.push(nums[i]);
    }
  }
  return result[0];
};
