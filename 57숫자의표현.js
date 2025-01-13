"use strict";
/*
    "숫자의 표현"
    - 수학 공부에 빠져있는 Finn.
    - 자연수 n을 연속한 자연수들로 표현하는 방법은 여러개.
    - ex. 15 => 4가지
                        - 1+2+3+4+5
                        - 4+5+6
                        - 7+8
                        - 15

    - 자연수 n ====> return 연속된 자연수들로 n을 표현하는 '방법의 수'

    [제한상황]
        - n <= 10,000
*/
function 숫자의표현(n) {
    const half = n % 2 > 0 ? Math.floor(n / 2) + 1 : n / 2;
    let arr = Array.from({ length: half }, (v, i) => i + 1).reverse();
    let cnt = 0;
    const result = (arr) => {
        let sum = 0;
        let flag = false;
        let ele = [];
        for (let i = 0; i < arr.length; i++) {
            ele.push(arr[i]);
            sum += arr[i];
            if (sum > n) {
                flag = false;
                // return {
                // 	"sum" : sum,
                // 	"ele"	: ele,
                // 	"flag" : flag
                // }
                return flag;
            }
            else if (sum === n) {
                flag = true;
                // return {
                // 	"sum" : sum,
                // 	"ele"	: ele,
                // 	"flag" : flag
                // }
                return flag;
            }
            else {
                flag = false;
            }
        }
    };
    // let test = [];
    let totalSum = arr.reduce((pre, cur) => pre + cur, 0);
    while (totalSum >= n) {
        let re = result(arr);
        if (re === true) {
            cnt += 1;
            // test.push(re);
        }
        arr.shift();
        totalSum = arr.reduce((pre, cur) => pre + cur, 0);
    }
    // console.log(test);
    return n === 1 ? cnt : cnt + 1; // 본인 자신을 더함
}
// console.log(숫자의표현(1)) // ===> 4
/**
 * 🤔 테스트 케이스는 전부 정답이지만 효율성 부분에서 0점 받음...
 * why ?
 * 	- `배열 조작(shift, reduce)`과 `반복적인 연산`으로 시간 복잡도가 높다.
 *
 * 	- 배열을 뒤집을 필요도 없다
 * 	> 어차피 앞에서부터 더하나 뒤에서부터 더하나 입력값 기준으로 break되기 때문에...
 * 		단, 입력값의 중간값 이상으로는 합계가 나오지 않는다는 것은 중요한 점이다.
 *
 * 	> 배열 조작 최소화:
            shift()와 reduce()를 반복적으로 호출하는 작업을 없애야 합니다.
            배열 대신 숫자 범위와 현재 합(sum)을 직접 계산합니다.

        > 불필요한 반복 제거:
            매번 배열을 재생성하고 합계를 다시 계산하는 대신, 누적된 합계를 활용합니다.
            자연수의 연속 합 계산은 수학적 특성을 활용하여 빠르게 처리할 수 있습니다.

 */
function 숫자의표현2(n) {
    let cnt = 0; // 방법의 수를 세기 위한 변수
    let start = 1; // 시작 값을 나타내는 변수
    let sum = 0; // 현재 합계를 저장하는 변수
    // 연속된 자연수로 합계를 계산
    while (start <= n) {
        sum = 0; // 합계를 초기화
        for (let i = start; i <= n; i++) {
            sum += i; // 현재 숫자를 더함
            if (sum === n) {
                cnt++; // 합계가 n과 같다면 방법의 수를 증가
                break; // 더 이상 검사할 필요 없음
            }
            else if (sum > n) {
                break; // 합계가 n보다 크면 종료
            }
        }
        start++; // 시작 값을 1 증가
    }
    return cnt;
}
/**
 * 👍 개선된 방법
 * - 그냥 1부터 더해라
 * - case1 더한 값이 n보다 초과되면 break
 * - case2 더한 값이 n과 같으면 cnt++; break
 * - other case 더한 값이 작다면 계속 더해지게
 *
 */
function 숫자의표현3(n) {
    let cnt = 0;
    let start = 1;
    const half = n % 2 > 0 ? Math.floor(n / 2) + 1 : n / 2;
    while (start < half) {
        let sum = 0;
        for (let i = start; i <= half; i++) {
            sum += i;
            if (sum > n) {
                break;
            }
            else if (sum === n) {
                cnt++;
                break;
            }
        }
        start++;
    }
    return cnt + 1;
}
console.log(숫자의표현3(1));
//# sourceMappingURL=57%EC%88%AB%EC%9E%90%EC%9D%98%ED%91%9C%ED%98%84.js.map