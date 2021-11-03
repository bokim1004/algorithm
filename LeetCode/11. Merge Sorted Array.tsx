<div>Merge Sorted Array</div>;

<div>
  {" "}
  You are given two integers arrays nums1 and nums2, sorted in non-decreasing
  order, and two integers m and n, representing the number of elements in nums1
  and nums2 repectively. Merge nums1 and nums2 into a single array sorted in
  non-decreasing order. The final sorted array should not be returned by the
  function,but instead be sorted inside the array nums1. To accommodate this,
  nums1 has a length of m+n, where the first m elements denote the elements that
  should be merged and the last n elements are set to 0 and should be ignored.
  nums2 has a length of n.
</div>;

<div>Example1</div>;

<div>
  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 Output:
  [1,2,2,3,5,6] Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming
  from nums1.
</div>;


<div>Example2</div>;

<div>
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
</div>;

<div>Example3</div>;
<div>
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
</div>;

<div>Solution</div>;

// Start by comparing the largest numbers between the two arrays and add to the end of nums1

var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < nums1.length; i++) {
        if(i >= m) {
            nums1[i] = nums2[i-m];
        }
    }
    return nums1.sort((a,b) => a-b);
};