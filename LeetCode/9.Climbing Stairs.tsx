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

var climbStairs = function (n) {};

<div>
  위 문제를 풀기 위해 알아야 할 지식 : 동적 계획법 동적계획법은 문제를 풀 떄
  하나의 문제를 여러 하위 문제로 나누어 풀고, 그것들을 결합해서 최종 목적에
  도달하는 방식의 알고리즘이다.
</div>;
