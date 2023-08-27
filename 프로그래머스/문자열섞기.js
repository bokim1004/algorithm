// 길이가 같은 두 문자열 str1, str2가 주어진다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한번씩 등장하는 문자열을 만들어 return하는 solution 함수를 완성해주세요.

ex)str1 = 'aaaaa'
str2 = 'bbbbb'
result ='ababababab'

function solution(str1, str2) {
    let result = '';
//str1의 문자 개수만큼 반복한다.
    for(let i = 0; i < str1.length; i++) {
      //현재 순번(i)의 str1문자와 str2문자를 번갈아가며 result에 추가한다.
        result += str1[i] + str2[i];
    }

    return result;
}

// str1[0]은 a이고 str2[0]은 b다. 
// 이게 합쳐져서 'ab'가 result에 올라가고,이게 5번 반복되니 정답이 나오는 것이다.

//또 다른 방법

function solution(str1, str2) {
    return [...str1].map((x, idx)=> x+str2[idx]).join("");
}

위 코드를 살펴보면
str1을 배열로 변환한다.
각 요소에 대해 현재 요소의 str2의 동일한 인덱스의 위치의 문자를 합친다.
결과배열을 빈 문자열로 합쳐서 문자열로 변환한다.
