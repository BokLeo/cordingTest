"use strict";
/*
    - 멀리뛰기를 연습하고 있다.
    - 효진이는 한번에 1칸 또는 2칸을 뛸 수 있다.
    - 칸이 총 4개 있을 때 효진이는 다음 5가지 방법으로 맨 끝 칸에 도달할 수 있다.
        (1칸, 1칸, 1칸, 1칸)
        (1칸, 2칸, 1칸)
        (1칸, 1칸, 2칸)
        (2칸, 1칸, 1칸)
        (2칸, 2칸)

    - 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법 수?
    - 방법 수를 1234567를 나눈 나머지를 리턴하는 함수를 만들어라

    [제한 사항]
        - n은 1 이상, 2000 이하인 정수입니다.
    [입출력 예]
        n			result
        4			5
        3			3
*/
function 멀리뛰기(n) {
    function factorialSum(sum, y) {
        let result = 1;
        for (let i = 0; i < y; i++) {
            result *= (sum - i); // 분자를 계산
            result /= (i + 1); // 즉시 분모로 나누기
        }
        return result;
    }
    let totalSum = 0;
    let value = [n, 0];
    // console.log("dididi : ", Math.floor(n/2)+1);
    for (let i = 0; i < Math.floor(n / 2) + 1; i++) {
        let x = value[0];
        let y = value[1];
        let sum = x + y;
        let val = factorialSum(sum, y) % 1234567;
        // let facSum = factorial(sum);
        // let facX = factorial(x);
        // let facY = factorial(y);
        // console.log(`facSum : ${facSum} / facX : ${facX} / facY : ${facY}`)
        // let val = facSum / (facX * facY);
        console.log(`(x,y) : ${x}, ${y} / (sum) : ${sum} / (val) : ${val} `);
        totalSum += val;
        value[0] -= 2;
        value[1] += 1;
    }
    return totalSum;
}
console.log(멀리뛰기(1000)); // 5
/*
[같은 것이 있는 순열]

1칸 이동 칸수 + 2칸 이동 칸수 = n 즉, x+2y = n
n=6일때, 계산식은 x+2y = 6
x : 6 => y : 0 -----------> (6,0)
x : 5 => 성립 불가
x : 4 => y : 1 -----------> (4,1)
x : 3 => 성립 불가
x : 2 => y : 2 -----------> (2,2)
x : 1 => 성립불가
x : 0 => y : 3 -----------> (0,3)

x축 : 6, 4, 2, 0 ----즉-----> x = for(let i=0; i<Math.floor(n / 2)+1; i++) ( n-2i )

y축 : 0, 1, 2, 3 ----즉-----> y = for(let i=0; i<Math.floor(n / 2)+1; i++) ( i )

이러한 식으로 입력값 n에 대한 이동 가능한 최대 횟수를 얻을 수 있음
'같은 것이 있는 순열' 계산식을 활용하여 경우의 수 계산( i는 팩토리얼 )
경우의 수 계산식 : (x+y)! / x! * y! -----> x! + x! / x! * y! -----> x! / yi
n 이 6일때,
(x이동 횟수, y이동 횟수) = 경우의 수 ------------> (6,0) = 1, (4,1) = 5, (2,2)=6, (0,3)=1
경우의 수 총합 : 13

이런식으로 n=1~6까지만해도 피보나치 연결 확인 가능.


😂 시바...



 */ 
//# sourceMappingURL=63%EB%A9%80%EB%A6%AC%EB%9B%B0%EA%B8%B0.js.map