// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
//양꼬치는 1인분에 12,000원 음료수는 2000원
//정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면
//총 얼마를 지불해야하는지 return하도록 solution함수를 완성하라.

function solution() {
  //소수점은 잘라내게 parseInt해줌
  return n * 12000 + k * 2000 - 1 * parseInt(n / 10) * 2000;
}
