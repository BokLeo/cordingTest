"use strict";
/*
    "연속 부분 수열 합의 개수"
    - 자연수로 이루어진 원형 수열
    - 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇가지
    * 원형 수열이란? 계속 연결되는 수열

    - param : 원형 수열 elements가 순서대로
    - return : 원형 수열 연속 부분 합의 개수

    [제항 사항]
    - 3 ≤ elements의 길이 ≤ 1,000
    - 1 ≤ elements의 원소 ≤ 1,000
*/
function 연속부분수열합의개수(elements) {
    let sumArr = new Set();
    function getCircularSubarrays(arr, size) {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
            const subarray = [];
            for (let j = 0; j < size; j++) {
                subarray.push(arr[(i + j) % n]); // 원형 배열 구현 (모듈러 연산)
                console.log(subarray);
            }
            sumArr.add(subarray.reduce((sum, val) => sum += val));
        }
    }
    // 1부터 배열 길이까지 모든 경우를 생성하는 함수
    function getAllCircularSubarrays(arr) {
        for (let size = 1; size <= arr.length; size++) {
            getCircularSubarrays(arr, size);
        }
    }
    // 사용 예제
    getAllCircularSubarrays(elements);
    return sumArr.size;
}
console.log(연속부분수열합의개수([7, 9, 1, 1, 4])); // 18
// console.log(연속부분수열합의개수([7,9,1,3,4])); // 18
//# sourceMappingURL=69%EC%97%B0%EC%86%8D%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B4%ED%95%A9%EC%9D%98%EA%B0%9C%EC%88%98.js.map