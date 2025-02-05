/*
	- 학생들 정수 번호(※ 정수 : 소수점이 없는 수로, 양의 정수(자연수), 0, 음의 정수)
	- 3명의 정수 번호를 더했을 때 0이 되면 => 삼총사

	[제한사항]
	- 3 ≤ number의 길이 ≤ 13
	- -1,000 ≤ number의 각 원소 ≤ 1,000
	- 서로 다른 학생의 정수 번호가 같을 수 있습니다.
*/

function 삼총사(number:number[]){
	let cnt = 0;
	for(let i=0; i<number.length; i++){
		for(let j=i+1; j<number.length; j++){
			for(let z=j+1; z<number.length; z++){
				console.log(`i : ${i} (${number[i]}) / j : ${j} (${number[j]}) / z : ${z} (${number[z]})`);
				if(number[i]+number[j]+number[z] === 0){
					cnt++;
				}
			}
		}
	}
	return cnt;
}

// console.log(삼총사([-2, 3, 0, 2, -5])); //	2
// console.log(삼총사([-3, -2, -1, 0, 1, 2, 3])); //	5
console.log(삼총사([-1, 1, -1, 1])); //	0