<h1>Remove Duplicates from Sorted List</h1>;

<div>
  Given the head of a sorted linked list, delete all duplicates such that each
  element appears only once. Return the linked list sorted as well.
</div>;

<div> Input: head=[1,1,2]; Output:[1,2];</div>;

<div>Input:head=[1,1,2,3,3]; Output:[1,2,3];</div>;

<div>알아두면 좋은 자료구조 개념 : Linked List</div>;
<div>
  Linked List는 Array List와는 다르게 엘리먼트와 엘리먼트 간의 연결을 이용해서
  리스트를 구현하는 것을 의미한다. 배열과 다르게 linked list는 위치가 흩어져
  있기에 서로 연결되어있어야 한다. 리스트는 노드(엘리먼트)들의 모임이다. 따라서
  내부적으로 노드를 가지고 있어야 한다.
</div>;

<div>
  노드는 최소한 두 가지 정보를 알고 있어야 한다. 노드의 값과 다음 노드다. 각각의
  노드가 다음 노드를 알고 있기에 하나의 연결된 값의 모임을 만들 수 있는 것이다.
  value에는 노드의 값이 저장되고, next에는 다음 노드의 포인터나 참조값을
  저장해서 노드와 노드를 연결시키는 방법을 사용한다
</div>;

var deleteDuplicates = function (head) {
  //sets current node to be head of list
  let current = head;
  //runs until we are at the end of the list
  while (current !== null && current.next !== null) {
    //checks to see if the current value and the next value are the same
    if (current.val === current.next.val) {
      //skips over the duplicate and the next value becomes next.
      current.next = current.next.next;
      //currnet value and the next value are not the same
    } else {
      // moves to the next node on the list to run through the while again
      current = current.next;
    }
  }
  //returns the linked list with no duplicates
  return head;
};

<div>풀이방법</div>;
<div>
  1. current를 head로 정하고 list를 시작해보자. let current=head; 2. node의
  current value와 다음 node의 value가 동일한지 확인하고 싶다. last node에 도달할
  때까지 list를 iterate한다. // while(currnet !==null && current.next !== null)
  만약 current.next가 null이면 last node에 도달한 것이며 while loop를 빠져나오면
  된다. 3. current.val과 current.next.val이 같다. 그럼 second
  node(current.next)를 스킵하고 current.next.next를 사용해서 third node로 간다.
</div>;
