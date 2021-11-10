<h1>Longest Common Prefix</h1>;

<div>
  Write a function to find the longest common prefix string amongsts an array of
  strings. If there is no common prefix, return an empty string "".
</div>;

<div>Example 1: strs=['flower','flow','flight'] Output:"fl"</div>;

var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs === null || strs.length === 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    // loop through all characters of the very first thing.
    for (let j = 1; j < strs.length; j++) {
      //loop through all other strings in the array
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }
};
