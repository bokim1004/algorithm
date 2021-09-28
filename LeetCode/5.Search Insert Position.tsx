<h1> Search Insert Position </h1>;

<div>
  Given a sorted array of distinct integers and a target value, return the index
  if the target is found. If not, return the index where it would be if it were
  inserted in order. You must write an algorithm with O(log n) runtime
  complexity.
</div>;

<p>Example 1:</p>;
<div>Input: nums=[1,3,5,6], target =5 Output:2</div>;

<p>Example 2:</p>;
<div>Input: nums=[1,3,5,6], target =2 Output:1</div>;

<p>Example 3:</p>;
<div>Input: nums=[1,3,5,6], target =7 Output:4</div>;

<p>Example 4:</p>;
<div>Input: nums=[1,3,5,6], target =0 Output:0</div>;

<p>Example 5:</p>;
<div>Input: nums=[1], target =0 Output:0</div>;

const searchInsert = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  //만약 target이 nums안에 있는 값들보다 크다면 nums.lenth를 리턴하면된다.
  //예를들어 예제3을 보면 target이 nums안 배열들보다 큰 숫자이다. Output은 4가 되니까. 이는 결국 Nums.length와 같게 된다.
  return nums.length;
};

<span>sort활용한 또 다른 풀이</span>;
const AnotherSearchInsert = (nums, target) => {
  let newArray = [...nums, target].sort((a, b) => {
    return a - b;
  });
  const position = newArray.indexOf(target);
  //target의 index를 리턴한다.
  return position;
};
