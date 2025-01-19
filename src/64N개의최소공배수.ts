/*
	"N개의 최소공배수"
	- 최소공배수란 ? 두 수의 배수 중 공통이 되는 가장 작은 숫자
	ex. 2와 7의 최소공배수 => 14
	
	- n개의 숫자를 담은 배열 arr이 입력되었을때, 이 수들의 최소 골배수를 반환하는 함수

	[제한 사항]
	- 1 <= arr.length <= 15
	- arr의 원소는 100이하인 자연수

	[입출력 예]
	- [2,6,8,14] => 168
	- [1,2,3] => 6	

	1,2
	1,2,3,6
	1,2,4,8
	1,2,7,14

	1,2,3,4,7,8
	1 1 1 1 2 2 2 2 

	공약수 1,2

	2 => 1 3 4 7

	최대 공약수 : 2
	최소 공배수 : 2 * 1 * 3 * 4 * 7
	24*7 = 168

	계산 방법 :
		1. 최대 공약수 구하기
		2. 최대 공약수로 각 숫자 나누기
		3. 몫 * 몫 *...  * 나머지 * 나머지 * ...
*/

function N개의최소공배수(arr:number[]){
	// 최대 공약수
	function gcd(a:number, b:number) :number {
		while (b !== 0) {
			let t = b;
			b = a % b;
			a = t;
		}
		return a > 0 ? a : 0;
	}
	// 최소 공배수
	function lcm(a:number, b:number) :number {
		return (a * b) / gcd(a, b);
	}
	

	// 여러 수의 최대 공약수
	function gcdMultiple(numbers:number[]) {
		return numbers.reduce((a, b) => gcd(a, b));
	}

	// 여러 수의 최소 공배수
	function lcmMultiple(numbers:number[]) {
		return numbers.reduce((a, b) => lcm(a, b));
	}

	return lcmMultiple(arr);
}


console.log(N개의최소공배수([2,6,8,14]));
console.log(N개의최소공배수([1,2,3]));