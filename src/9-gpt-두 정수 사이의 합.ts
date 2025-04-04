export {};

/*
🧮 문제: 두 정수 사이의 합
문제 설명
두 정수 a와 b가 주어졌을 때, a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수 solution을 완성하세요.
예를 들어 a=3, b=5인 경우에는 3 + 4 + 5 = 12를 리턴합니다.

제한 조건
- a와 b는 -10,000 이상 10,000 이하인 정수입니다.
- a와 b가 같으면 둘 중 아무 수나 리턴하세요.

입출력 예
a	b	return
3	5	12
3	3	3
5	3	12

*/
function solution1(a: number, b: number): number {
	if (a === b) return a;

	const min = Math.min(a, b);
	const max = Math.max(a, b);

	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}

console.log(solution1(3, 5));

// ✅ 다른 정답을 알아보자

// 🔹 가우스 공식을 활용한 방법
function solution2(a: number, b: number): number {
	return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
console.log(solution2(3, 5));

// 🔹Array.from + reduce
function solution3(a: number, b: number): number {
	return Array.from({ length: b - a + 1 }, (_, i) => a + i).reduce(
		(acc, cur) => acc + cur,
		0
	);
}
console.log(solution3(3, 5));

// 🔹while문을 활용한 방법
function solution4(a: number, b: number): number {
	let sum = 0;
	while (a <= b) {
		sum += a;
		a++;
	}
	return sum;
}
console.log(solution4(3, 5));
