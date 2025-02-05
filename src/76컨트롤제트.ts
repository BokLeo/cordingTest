/*
	- 숫자와 "Z"가 공백으로 구분되어 담긴 문자열
	- 문자열에 있는 숫자를 차례대로 더하려고 한다.
	- "Z"가 나오면 바로 전에 더했던 숫자를 뺀다.

	[제한사항]
		- 1 ≤ s의 길이 ≤ 200
		- -1,000 < s의 원소 중 숫자 < 1,000
		- s는 숫자, "Z", 공백으로 이루어져 있습니다.
		- s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
		- 연속된 공백은 주어지지 않습니다.
		- 0을 제외하고는 0으로 시작하는 숫자는 없습니다.
		- s는 "Z"로 시작하지 않습니다.
		- s의 시작과 끝에는 공백이 없습니다.
		- "Z"가 연속해서 나오는 경우는 없습니다.
*/
function 컨트롤제트(s:string){
	const sArr = s.split(' ');
	let resultArr:number[] = [];
	sArr.forEach((val)=>{
		const el = Number(val);

		Number.isNaN(el) ? resultArr.pop() : resultArr.push(el);		
	})

	return resultArr.reduce((acc, cur)=> acc+cur, 0);
}


console.log(컨트롤제트("1 2 Z 3")); //	4
console.log(컨트롤제트("10 20 30 40")); //	100
console.log(컨트롤제트("10 Z 20 Z 1")); //	1
console.log(컨트롤제트("10 Z 20 Z")); //	0
console.log(컨트롤제트("-1 -2 -3 Z")); //	-3