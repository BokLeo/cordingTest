/*
	[완전 탐색]
	- Leo는 (격자) 카펫을 사러갓다.
	- 중앙에는 노란색
	- 바깥 테두리 1줄은 갈색
	(집에 돌아옴)
	- Leo는 격자와 색깔은 기억난다.
	- 전체 카펫 크기는 기억하지 못한다.

	- 갈색 격자의 수 : brown / 노란 격자의 수 : yellow 가 주어질때
	- return [카펫의 가로, 세로 크기]

	[제한사항]
		- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
		- 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
		- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

	[입출력 예]
		brown	yellow	return
		10	2	[4, 3]
		8	1	[3, 3]
		24	24	[8, 6]
*/

function 카펫(brown:number, yellow:number){
	const arr:number[] = [];

	const sum = brown + yellow;
	
	for(let i=1; i<=sum; i++){
		if(sum % i === 0){
			if(arr.indexOf(i) === -1){
				
				const x = i;
				const y = Math.floor(sum/i);

				if((x-2)*(y-2) === yellow){
					return [y,x]
				}
			}
		}
	}
}

console.log(카펫(14,4));

// console.log(solution(24,24));

/*
	[보완 사항]
	- `arr.indexOf(i) === -1`을 통해 중복을 제거하는 시도는 좋았으나
		for루프에서 약수만 탐색함으로 이미 중복되지 않는 값을 순회함.
		💡 불필요 로직과 Array를 제거할 수 있음
	
	- for루프의 조건식 `i<=sum`은 sum까지 모든 수를 순회하지만 => O(n)
		💡 모든 약수는 제곱근까지만 확인하면 충분 => O(√n)

	- 💡 몫을 나타내는 `Math.floor(sum/i)`함수는 단순 계산식인 `sum/i`로 변경할 수 있음.
*/

function 카펫2(brown: number, yellow: number): number[] {
	const sum = brown + yellow;

	for (let i = 1; i <= Math.sqrt(sum); i++) {
		if (sum % i === 0) {
			const x = sum/i;
			const y = i;

			if((x-2)*(y-2) === yellow){
				return [x, y]
			}
		}
	}
	return [];
}
console.log(카펫2(14,4));