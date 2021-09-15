<h1> Remove Element</h1>;

<div>
  Given an integer array nums and an integer val, remove all occurrences of val
  in nums in-place. The relative order of the elements may be changed.
  <br />
  Since it is impossible to change the length of the array in some languages,
  you must instead have the result be placed in the first part of the array
  nums. More formally, if there are k elements after removing the duplicates,
  then the first K elements of nums should hold the final result. It does not
  matter what you leave beyond the first K elements.
  <br />
  Return K after placing the fianl result in the first K slots of nums. Do not
  allocate extra space for another array. YOu must do this by modifying the
  input array in-place with O extra memory.
</div>;

<p>
  Example 1: <br />
  Input: nums=[3,2,2,3], val=3 Output:2, nums=[2,2,_,_] <br />
  Explanation: Your function should return K=2,with the first two elements of
  nums being 2.
  <br />
  It does not matter what you leave beyond the returned K (hence they are
  underscores)
</p>;

<p>
  Example 2:
  <br />
  Input:nums=[0,1,2,2,3,0,4,2], val=2
  <br />
  Output:5, nums=[0,1,4,0,3,_,_,_]
  <br />
  Explanation: Your function should return k=5, with the first five elements of
  nums containing 0,0,1,3,4.
  <br />
  Note that the five elements can be returned in any order. It does not matter
  what you leave beyond the returned K (hence they are underscores)
</p>;

<p>Solution</p>;

const removeElement = (nums, val) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    //Swap number if current number is not equal to val
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }
  //nums.length=j;
  return j;
};

<span>filter를 이용한 방법도 있다</span>;

const removeElements = (nums, val) => {
  nums = nums.filter((num: any) => num !== val);
  return nums.length;
};
