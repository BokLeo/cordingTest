export {};

/*
📦 문제: 제일 작은 수 제거하기
📝 문제 설명
정수를 담은 배열 arr가 주어졌을 때, 가장 작은 수를 제거한 배열을 리턴하는 함수를 완성하세요.
단, 리턴하려는 배열이 빈 배열이 되면 [-1]을 리턴해야 합니다.
(원본 배열은 건드리지 말고, 새로운 배열을 리턴해야 해요.)

📌 제한 사항
- arr는 길이가 1 이상인 배열입니다.
- 각 원소는 1 이상 1,000,000 이하의 자연수입니다.

💡 입출력 예
arr	return
[4, 3, 2, 1]	[4, 3, 2]
[10]	[-1]
*/

// 🔹 내림차순으로 정렬한 뒤 배열의 길이-1 만큼 잘라서 return
function solution(arr: number[]): number[] {
	if (arr.length <= 1) return [-1];

	return arr.sort((a, b) => b - a).slice(0, arr.length - 1);
}

console.log(solution([4, 3, 2, 1]));

/*	
	✅ 1번 풀이: 정렬 + slice
	arr.sort((a, b) => b - a).slice(0, arr.length - 1);

	🔍 장점
	- 정렬된 상태가 필요한 경우엔 이게 유용함 (ex. 순위 정리, 우선순위 큐 만들기 등)
	- slice를 통해 가장 마지막(가장 작은 수)을 깔끔하게 잘라낼 수 있음

	⚠️ 단점
	- 원본 배열인 arr이 정렬을 통해 변경됨
	- → 실무나 테스트 상황에서 arr이 재사용되는 경우 문제가 생길 수 있어!

	정렬은 **O(n log n)**의 시간복잡도를 가지므로
	→ 불필요한 비용 발생 가능성 있음
*/

// 🔹filter메서드를 통해 가장 작은 수를 제외한 결과 return
function solution2(arr: number[]): number[] {
	if (arr.length <= 1) return [-1];
	return arr.filter((num) => num !== Math.min(...arr));
}

console.log(solution2([4, 3, 2, 1]));
/*
	✅ 2번 풀이: filter + Math.min
	arr.filter((num) => num !== Math.min(...arr));

	🔍 장점
	원본 배열을 건드리지 않음 → ⭐ 실무에서 매우 중요

	가장 작은 수를 정확하게 찾아서 제거
	→ 단, 동일한 최소값이 여러 개 있어도 전부 제거됨

	⚠️ 단점
	문제 요구사항이 "가장 작은 수 하나만 제거"일 경우 이 방식은 부적절할 수 있음
	(하지만 현재 문제는 "그냥 가장 작은 수 제거"라고만 되어 있어서 OK)

	Math.min(...arr)는 내부적으로 spread 연산이 포함되어 O(n)
	→ 큰 배열이면 살짝 비효율이 생길 수 있음
*/

function solution3(arr: number[]): number[] {
	if (arr.length <= 1) return [-1];

	const min = Math.min(...arr);
	const index = arr.indexOf(min);

	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
