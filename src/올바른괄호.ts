// function solution(s:string){
// 	if(s[0] !== '(') return false;
// 	if(s[s.length-1] !== ')') return false;

// 	while(s.indexOf('()') !== -1){
// 		s = s.replace('()', '');
// 	}

// 	return s.length === 0;
// }


/** 
 * 해결 방법 : '()'를 짝지어 소거법으로 해결
 * 실패 : 효율성 실패
 * 원인 : while 루프와 replace의 비효율성 원인
		- s.replace('()', '')는 매번 문자열을 수정하여 새로운 문자열을 생성합니다. 이는 문자열의 길이가 커질수록 많은 메모리와 연산을 소모합니다.
		- indexOf('()')와 replace가 반복적으로 호출되며, 이로 인해 시간 복잡도가 **O(n^2)**에 가까워질 수 있습니다.
		- 입력 문자열의 길이가 최대 100,000이기 때문에, 효율성이 요구되는 테스트에서 문제가 발생합니다.
		- 문자열의 길이가 길 경우, replace와 indexOf를 반복적으로 호출하면 문자열 전체를 여러 번 탐색하게 되어 비효율적입니다.
 */



// function solution(s:string){
// 	if(s[0] !== '(') return false;
// 	if(s[s.length-1] !== ')') return false;

// 	let stack:string[] = [];
// 	for(const char of s){
// 		if(char === '('){
// 			stack.push('(');
// 		}else if(char === ')'){
// 			if(stack.length === 0){
// 				return false;
// 			}
// 			stack.shift();
// 		}
// 	}

// 	return stack.length === 0;
// }
		
/**
 * 해결 방법2 : while문을 제거하고 for of 문법을 사용.
 * 실패 : 효율성 검증
 * 원인 : 
 * 	- 이 메서드는 배열의 첫 번째 요소를 제거하지만, 배열의 모든 요소를 앞으로 이동시키는 연산이 필요합니다. 이로 인해 시간 복잡도가 **O(n)**이 되고, 루프 안에서 반복적으로 호출되므로 최종적으로 **O(n^2)**의 시간 복잡도가 됩니다.
 * 	- shift()는 배열의 첫 번째 요소를 제거하며, 배열의 나머지 요소를 앞으로 한 칸씩 이동합니다.
		- 이 연산은 배열의 길이에 비례하는 시간이 걸리므로, 긴 문자열에서 비효율적으로 작동합니다.
 */

		
function solution(s:string){
	if(s[0] !== '(') return false;
	if(s[s.length-1] !== ')') return false;

	let stack:string[] = [];
	for(const char of s){
		if(char === '('){
			stack.push('(');
		}else if(char === ')'){
			if(stack.length === 0){
				return false;
			}
			stack.pop();
		}
	}

	return stack.length === 0;
}
		
/**
 * 정답
 * stack.shift() -> stack.pop()으로 변경
 * 해석
 *  - 스택에서는 LIFO (Last In, First Out) 방식이므로, 배열의 마지막 요소를 추가하거나 제거해야 합니다. 이를 위해 push와 pop을 사용해야 합니다. pop()은 배열의 마지막 요소를 제거하므로 O(1) 시간 복잡도를 가지며 효율적입니다.
 * 
 */
console.log(solution("()()"));