<h1>Climbing Stairs</h1>;

<div>
  You are climbing a staircase. It takes n steps to reach the top. Each time you
  can either climb 1 or 2 steps. In how many distinct ways can you climb to the
  top?
</div>;

<span>Example1:</span>;
<div>
  Input:n =2 Output:2 Explanation: There are two ways to climb to the top. 1.
  1step + 1step 2. 2steps
</div>;

<span>Example2:</span>;
<div>
  Input:n=3, Output:3 Explanation: There are three ways to climb to the top. 1.
  1step + 1step + 1step 2.1step + 2steps 3.2steps+1step
</div>;

<div>
  위 문제를 풀기 위해 알아야 할 지식 : 동적 계획법 동적계획법은 문제를 풀 떄
  하나의 문제를 여러 하위 문제로 나누어 풀고, 그것들을 결합해서 최종 목적에
  도달하는 방식의 알고리즘이다.
</div>;

<div>
  3계단을 오르는 것은 3가지의 경우의 수가 있다. 1. 1+1+1 2.1+2 3.2+1 == 이는
  다음 식이 성립된다. f(3)=f(3-1)+f(3-2)=2+1=3 총 3가지 방법이 나온다. 이 규칙에
  대한 식을 세워보자.
  <span>f(n)=n, n이 1 ,2인 경우</span>
  <span> =f(n-1)+f(n-2), n이 3이상인 경우</span>
</div>;

<div>피보나치 방법</div>;

var climbStairs = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
};

<div>또 다른 방법</div>;

var climbStairss = function (n) {
  //값을 담을 dp 변수 생성. 메모이제이션을 이용하기 위해서 
  //메모이제이션이란 컴퓨터 프로그램이 동일한 계산을 반복해야할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술
  var dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
