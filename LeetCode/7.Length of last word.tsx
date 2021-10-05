<h1>Length of last word</h1>;

<div>
  Given a string 's' consisting of some words separated by some number of
  spaces, return the length of the last word in the string. A word is a maximal
  substring consisting of non-space characters only.
</div>;
<div>Example 1:</div>;
<div>Input:s="Hello World"</div>;
<div>Output:5</div>;
<div>Explanation: The last word is "World" with length 5.</div>;

<div>Example 2:</div>;
<div>Input:s="fly me to the moon"</div>;
<div>Output:4</div>;
<div>Explanation: The last word is "moon" with length 4.</div>;

<div>Example 3:</div>;
<div>Input:s="luffy is still joyboy"</div>;
<div>Output:6</div>;
<div>Explanation: The last word is "joyboy" with length 6.</div>;

<div>Answer</div>;

var legnthOfLastWord = function (s) {
  //trim()메서드는 문자열 양 끝의 공백을 제거한다.
  //split()은 문자열을 분할하는 메서드다.
  //separator= " " 의미는 단어별로 잘라서 배열에 담는다는 것을 의미
  //separator="" 의미는 글자별로 잘라서 배열에 담기
  //separator="," 의미는 특정 구분자로 잘라서 배열에 담기
  const words = s.trim().split(" ");
  //trim을 해서 공백을 없앤 다음 split으로 단어별로 자르기
  return words.length > 0 ? words[words.length - 1].length : 0;
};
