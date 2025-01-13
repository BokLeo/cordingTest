"use strict";
/*
"이진 변환 반복하기"

- 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환
    1. x의 모든 0을 제거한다.
    2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 변환
    ex. x = "0111010" -> x의 길이는 4 > x에 이진 변환 => "1111" -> "100"
    3. 순수한 1들이 남을때까지 0를 지우는 것을 반복
    result : [변환 과정의 횟수, 제거된 0의 개수]

[제한사항]
- s의 길이는 1 이상 150,000 이하입니다.
- s에는 '1'이 최소 하나 이상 포함되어 있습니다.
 */
/*
    "0이 있는지 확인하는 방법(단, 개수는 상관없다)"
        - includes() : 문자 포함 확인 -> boolean
        - test() : 정규 표현식 확인 -> boolean
        - indexOf() : 문자를 포함하는 첫번째 위치 -> boolean
        - split().length : 문자열을 "파라미터"로 분리 후 길이 파악 -> if(length > 0) boolean
        - Array.some() : 배열로 변환 후 각 요소 검사
        - match() : "파라미터"가 존재하면 배열반환 아니면 null -> if(match !== null) boolean
*/
function 이진변환반복하기(s) {
    let rotationCnt = 0;
    let zeroCnt = 0;
    // 0을 제거하는 함수 => return [제거된 0의 갯수, 제거된 값]
    const deleteZero = (param) => {
        const zeroNum = [...param].reduce((count, char) => count + (char === "0" ? 1 : 0), 0);
        const value = [...param].filter(item => item === "1").join('');
        return [zeroNum, value];
    };
    // 이진법 변환 함수
    const toBinary = (param) => {
        return param.length.toString(2);
    };
    const logic = (param) => {
        const resultValue = deleteZero(param);
        zeroCnt += resultValue[0];
        const toBinaryValue = toBinary(resultValue[1]);
        rotationCnt += 1;
        return toBinaryValue;
    };
    while (s !== "1") {
        s = logic(s);
    }
    return [rotationCnt, zeroCnt];
}
function test(testCase, expected) {
    const result = 이진변환반복하기(testCase);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`테스트 케이스: "${testCase}"`);
    console.log(`예상 결과: [${expected}]`);
    console.log(`실제 결과: [${result}]`);
    console.log(`테스트 ${passed ? '통과 ✅' : '실패 ❌'}`);
    console.log('---');
}
test("1111111", [4, 1]);
test("110010101001", [3, 8]);
test("01110", [3, 3]);
// test("111", [3, 1]);
// test("0000000001", [1, 9]);
// test("00000111110000", [3, 11]);
// test("1".repeat(150000), [...]); // 긴 케이스 추가 필요
// test("0".repeat(149999) + "1", [1, 149999]);
// console.log(solution("110010101001")); 			// [3,8]
// "110010101001" -> "111111" -> 6("110") -> "11" -> 2("10") -> "1"
// 6개제거 --------------------> 1개제거------------> 1개제거  [3,8]
// console.log(solution("01110")); 						// [3,3]
// console.log(solution("1111111")); 					// [4,1]
//# sourceMappingURL=56%EC%9D%B4%EC%A7%84%EB%B3%80%ED%99%98%EB%B0%98%EB%B3%B5%ED%95%98%EA%B8%B0.js.map