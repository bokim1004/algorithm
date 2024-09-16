//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
// 10 ≤ price ≤ 1,000,000
//price는 10원 단위로(1의 자리가 0) 주어집니다.
// 소수점 이하를 버린 정수를 return합니다.

{
  /** 내가 푼 방법 조건을 하나하나 정해줬다!! */
}

function solution(price) {
  let tenThousand = 10000;
  if (price >= 10 * tenThousand && price < 30 * tenThousand) {
    return Math.floor(price - price * 0.05);
  } else if (price >= 30 * tenThousand && price < 50 * tenThousand) {
    return Math.floor(price - price * 0.1);
  } else if (price >= 50 * tenThousand && price < 101 * tenThousand) {
    return Math.floor(price - price * 0.2);
  } else {
    return Math.floor(price);
  }
}

// 아래는 프로그래머스에서 본 깔끔하게 작성된 코드
//이렇게도 작성할 수 있구나~~
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};
