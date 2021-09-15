<h1> Remove Duplicates from Sorted Array</h1>;

<div>
  {" "}
  Given an integer array nums sorted in non-decreasing order, remove the
  duplicates in-place such that each unique elements appears only once. The
  relative order of the elements should be kept the same.
  <br />
  Since it is impossible to change the length of the array in some languages,
  you must instead have the result be placed in the first part of the array
  nums. More formally, if there are K elements after removing the duplicates,
  then the first K elements of nums should hold the final result. It does not
  matter what you leave beyond the first K elements.
  <br />
  Return K after placing the final result in the first K slots of nums. Do not
  allocate extra space for another array. You must do this by modifying the
  input array in-place with O extra memory.
</div>;

<div>Example 1:</div>;

<div>
  Input: nums==[1,1,2] Output:2, nums=[1,2,_] Explanation:Your function should
  return k=2,with the first two elements of nums being 1 and 2 respectively. It
  does not matter what you leave beyond the returned k (hence they are
  underscores)
</div>;

<div>Example 2:</div>;

<div>
  Input:nums=[0,0,1,1,1,2,2,3,3,4] Output:5, nums=[ 0,1,2,3,4,_,_,_,_]
  Explanation : Your function should return k=5, with the first five elements of
  nums being 0,1,2,3,and 4 respectively. It does not matter what you leave
  beyond the returned K (hence they are underscores)
</div>;

<div>Solution</div>;

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

<strong>OR</strong>;

const removeDuplicatess = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else j++;
  }
  return i + 1;
};

<div>
  (j) is needed to iterate through the given array and second pointer (i) is
  needed to place a unique number to the position next to it.
  <br />
  1. Return 0 if the given array is empty.
  <br />
  2. Declare two pointers, i and j and set them to 0 and 1, respectively.
  <br />
  3.Use a while loop to check if the number with index j is equal to the number
  with index i. <br />
  4.If not, increment i by 1 and copy the value of the number with index j to
  the element at the index i and then increment j by 1. <br />
  5.If they are equal, increment j to skip the duplicate.
  <br />
  6.After the loop finishes,return the length of the unique numbers,which equals
  to i+1.
</div>;
