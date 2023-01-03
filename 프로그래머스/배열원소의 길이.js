//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

function solution(strlist) {
  //length는 배열의 길이뿐만 아니라 string.length값도 구할 수 있다.
  // let strlist = ["We", "are", "the", "world!"];
  var answer = [];

  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}
