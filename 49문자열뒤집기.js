/*
- 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

- 제한사항
1 ≤ my_string의 길이 ≤ 1,000

- 입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"

- 입출력 예 설명
입출력 예 #1
my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

입출력 예 #2
my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
*/

function solution(my_string){
	console.log(my_string.split(''));
	let arr = [];
	
	for(let value of my_string){
		arr.push(value);
	}

	return arr.reverse().join('');
}

console.log(solution("jaron")); // => "noraj"


// 문자를 배열로 바꿀때 
// [my_string]; => [ 'jaron' ]
// [...my_string]; => [ 'j', 'a', 'r', 'o', 'n' ]
// my_string.split('') ✨ split() 함수는 문자열을 주어진 문자열 구분자나 정규식을 기준으로 나누어 배열로 변환하는 함수입니다 
// Array.from(my_string)