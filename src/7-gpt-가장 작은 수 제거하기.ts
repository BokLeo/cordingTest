/*
	🧾 가장 작은 수 제거하기
	📘 문제 설명
	정수를 저장한 배열, arr에서 가장 작은 수를 제거한 배열을 리턴하는 함수 solution을 완성해라.
	단, 리턴하려는 배열이 빈 배열이 될 경우에는 [-1]을 리턴해라.

	📌 제한 사항
	arr은 1개 이상 1,000,000개 이하의 원소를 가진 배열이다.

	각 원소는 1 이상 10,000 이하의 자연수이다.

	🧪 입출력 예
	solution([4, 3, 2, 1]);     // ➜ [4, 3, 2]
	solution([10]);            // ➜ [-1]

*/

const param = [4, 3, 2, 1];

function solution(arr: number[]): number[] {
	if (arr.length <= 1) return [-1];

	return arr.sort((a, b) => b - a).slice(0, arr.length - 1);
}

console.log(solution(param));

function useFilter(arr: number[]): number[] {
	if (arr.length <= 1) return [-1];

	const min = Math.min(...arr);
	return arr.filter((num) => num !== min);
}
