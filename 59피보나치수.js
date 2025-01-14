"use strict";
/*
    - 피보나치 수는 F(0)=0, F(1)=1일때, 1이상의 n에 대하여
        F(n) = F(n-1) + F(n-2) 가 적용되는 수

        > F(2) = F(0) + F(1) = 0 + 1 = 1
        > F(3) = F(1) + F(2) = 1 + 1 = 2
        > F(4) = F(2) + F(3) = 1 + 2 = 3
        > F(5) = F(3) + F(4) = 2 + 3 = 5

    - 2 이상의 n이 입력.
    - n 번째 피보나치 수를 1234567으로 나눈 나머지를 리턴

    [입출력 예]
        n	return
        3	2
        5	5
    [입출력 예 설명]
        피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
*/
function 피보나치수(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci.push((fibonacci[i - 2] + fibonacci[i - 1]) % 1234567);
    }
    return fibonacci[n];
}
console.log(피보나치수(100000));
//# sourceMappingURL=59%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%EC%88%98.js.map