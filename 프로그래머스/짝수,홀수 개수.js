// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let even = [];
  let odd = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even.push(num_list[i]);
    } else if (num_list[i] % 2 !== 0) {
      odd.push(num_list[i]);
    }
  }

  return [even.length, odd.length];
}

// 인상적이었던 다른 답안

//filter를 이용해 간단하게 구현 가능하다.
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
