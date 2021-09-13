<h1>Merge Two Sorted List </h1>;

<div>
  Merge two sorted linked lists and return it as a sorted list. the list shoud
  be made by splicing together the nodes of the first two lists
</div>;

<div>Example1:</div>;
<div>Input: l1 =[1,2,4], l2=[1,3,4]</div>;
<div>Output: [1,1,2,3,4,4]</div>;

<div>Example2 :</div>;
<div>Input: l1=[], l2=[]</div>;
<div>Output:[]</div>;

<div>Example3 :</div>;
<div>Input: l1=[], l2=[0]</div>;
<div>Output:[0]</div>;

<h1>Solution1:</h1>;
<p>While loop</p>;

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoList = function (l1, l2) {
  //Initialise a new LinkedList with a dummy ListNode
  let newList = new ListNode(0, 0);
  //Maintain a reference to the head of the new LinkedList
  const headOfNewList = newList;
  //whilst both of the passed in lists contain more elements
  //while은 조건문이 참일 때 실행되는 반복문 (조건문이 참일 때만 while문 속의 문장들이 실행된다.)
  while (l1 !== null && l2 !== null) {
    //If l1's value is smaller
    if (l1.val < l2.val) {
      //Add l1's value to the new list
      newList.next = l1;
      //Move l1 to its next element
      l1 = l1.next;
    } else {
      //Add l2's value to the new list
      newList.next = l2;
      //Move l2 to its next element
      l2 = l2.next;
    }
    //Move into the level of the LinkedList of the next iteration
    newList = newList.next;
  }
  //If l1 has run out of elements
  if (l1 === null) {
    //Append l2 to the new list
    newList.next = l2;
  }
  //If l2 has run out of elements
  else {
    //Append l1 to the new list
    newList.next = l1;
  }
  return headOfNewList.next;
};

<h1>Solution2:</h1>;
<p>Recursion</p>;
// 연결 리스트 두 개를 값이 작은 순서대로 정렬하여 합친다.
const mergeTwoLists = function (l1, l2) {
  // 빈 리스트가 있으면 두 리스트를 합칠 필요가 없음
  if (!l1) return l2;
  if (!l2) return l1;

  //less와 more변수를 이용해서, 두 리스트의 노드 값을 비교해서 더 작은 값인 리스트를 less에, 큰 값을 가진 리스트를 more에 저장한다.
  let less = l1.val < l2.val ? l1 : l2;
  let more = l1.val < l2.val ? l2 : l1;
  less.next = mergeTwoLists(less.next, more);
  return less;
};
