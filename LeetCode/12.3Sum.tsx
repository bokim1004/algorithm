<div>
  Given an integer array nums,return all the triplets [nums[i],nums[j],nums[k]]
  such that i!=j, i!=k, and j!=k and nums[i]+nums[j]+nums[k]==0. Notice that the
  solution set must not contain duplicate triplets.
</div>;

<div>Example 1: Input: nums =[-1,0,1,2,-1,-4] Output:[[-1,-1,2],[-1,0,1]]</div>;

<div>Input:nums=[] Output:[]</div>;
<div>Input:nums =[0] Output:[]</div>;

var threeSum = function (nums) {
  let result = [];
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    //making sure our solution set does not contain duplicate triplets
    if (sortedNums[i] != sortedNums[i - 1]) {
      //A left pointer will be set to a number that comes immediately after the current number
      let left = i + 1;
      //A right pointer will be set to the number at the end of the array.
      let right = sortedNums.length - 1;
      //Then we are going to find our current sum which is the sum of our current number,a left number,and a right number.
      while (left < right) {
        const currentSum = sortedNums[i] + sortedNums[left] + sortedNums[right];
        if (currentSum === 0) {
          result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
          while (sortedNums[left] == sortedNums[left + 1]) left++;
          while (sortedNums[right] == sortedNums[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;    //If the current sum is less than 0, we move the left pointer to the right by one to increase the sum.
                //Because we earlier sorted the given array in ascending order, we know that each number is greater than the number to its left.
        } else if (currentSum > 0) {
          right--;  
          //If the current sum is greater than 0,
          // because we know that each number is smaller than the number to its right, we can move the right pointer to the left by one to decrease sum

        }
      }
    }
  }
  return result;
};
