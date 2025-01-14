"use strict";
/*
    - 알파벳 소문자로 이루어진 문자열을 가지고 시작.
    - 같은 알파벳이 2개 붙어 있는 짝 -> 제거
    - 앞뒤 문자열 이어 붙임
    - 반복
    - 문자열 모두 제거할 수 있으면 1 : 0

    ex. 문자열 S = baabaa
        - b aa baa -> bb aa -> aa ->
        - return 1

    [제한상황]
        - 문자열 길이 : n <= 1000000
        - 문자열은 모두 소문자
*/
function 짝지어제거하기(s) {
    let arr = [...s];
    while (true) {
        for (let i = 0; i < arr.length; i) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2);
                if (arr.length === 0) {
                    return 1;
                }
                else {
                    i = 0;
                }
            }
            else {
                ++i;
            }
        }
        return 0;
    }
}
// console.log(짝지어제거하기('cdcd'));
/*
    - 원인 : 효율성 에러
    - 원인해석 :
        - splice의 시간복잡도 증가
            > splice는 배열에서 요소를 제거한 뒤, 나머지 요소를 '재배치'한다.
            > 따라서, splice의 시간 복잡도는 O(k)이다. (여기서의 k는 배열의 길이)
            > 중복을 삭제 후 재배치가 매번 일어나기 때문에 복잡도는 증가한다.
        - while - for
            > 배열의 길이가 줄어들면 '재순회'
            > n개의 문자열 => 최악의 경우 n/2 번의 순회가 이루어질 수 있음.
        - 총평
            > splice 호출 => O(k), n/2번 발생
            > 따라서, 시간 복잡도 = O(n^2)
*/
function 짝지어제거하기2(s) {
    const stack = [];
    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0 ? 1 : 0;
}
console.log(짝지어제거하기2('aaabbbabab'));
/*
    [풀이 해석]
        - 💡 stack을 활용한 LIFO(Last In, First Out) -> 마지막에 추가된 요소부터 지운다.
        - 한번의 순환으로 모든 중복을 제거할 수 있음
        - stack의 길이가 0이라면 모두 지워진 것으로 1반환
        - stack의 길이가 0이 아니라면 글자가 남아있는 것으로 0반환


    [풀이 과정]
        'b'
        push 'b' => ['b']
        'a'
        push 'a' => ['b', 'a']
        'a'
        pop 'last' => ['b']
        'b'
        pop 'last' => []
        'a'
        push 'a' => ['a']
        'a'
        pop 'last' => []
*/
//# sourceMappingURL=60%EC%A7%9D%EC%A7%80%EC%96%B4%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0.js.map