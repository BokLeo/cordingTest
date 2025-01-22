"use strict";
/*
    "괄호 회전하기"
    - (), [], {} 는 모두 올바른 괄호 문자열입니다.
    - 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
    - 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.

    - param : 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s
    - return : s를 왼쪽으로 s의 길이 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수

    [제한 사항]
    - s의 길이는 1 이상 1,000 이하입니다.
*/
function 괄호회전하기(s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        checking(s.slice(i) + s.slice(0, i)) ? count++ : 0;
    }
    function checking(str) {
        while (str.length > 0) {
            if (str.includes('()')) {
                str = str.replace('()', '');
            }
            else if (str.includes('{}')) {
                str = str.replace('{}', '');
            }
            else if (str.includes('[]')) {
                str = str.replace('[]', '');
            }
            else {
                return false;
            }
        }
        return true;
    }
    return count;
}
// console.log(괄호회전하기("[](){}")); 	//	3
console.log(괄호회전하기("}]()[{")); //	2
// console.log(괄호회전하기("[)(]")); 		//	0
// console.log(괄호회전하기("}}}")); 		//	0
//# sourceMappingURL=70%EA%B4%84%ED%98%B8%ED%9A%8C%EC%A0%84%ED%95%98%EA%B8%B0.js.map