/*
문자열로 구성된 배열 strings와, 정수 n이 주어졌을 때
각 문자열의 n번째 글자를 기준으로 정렬하려고 합니다.

✍ 입력 예시
strings = ["sun", "bed", "car"]
n = 1

🧾 출력 예시
["car", "bed", "sun"]

📌 설명
각 문자열의 인덱스 1의 문자 기준으로 정렬하면:
- "sun"[1] = u, "bed"[1] = e, "car"[1] = a
- 오름차순 정렬 시: a < e < u

⛓ 조건
- strings는 길이 1 이상 100 이하의 배열
- 각 문자열은 소문자로 구성되며 길이는 1 이상 100 이하
- n은 0 이상 문자열 길이보다 작음
- 만약 n번째 문자가 같다면, 사전순으로 정렬해야 한다

*/
function solution(str: string[], n: number) {
	return str.sort((a, b) => {
		if (a[n] === b[n]) {
			return a.localeCompare(b); // 전체 문자열 사전순 비교
		}
		return a[n].localeCompare(b[n]); // n번째 문자 기준 비교
	});
}
// 👉 localeCompare()는 문자열을 사전순으로 비교해주는 메서드야 (실무에서도 많이 씀).
// 👉 정렬 기준을 커스터마이즈할 수 있으면, 배열 처리 문제에 매우 유연하게 대응할 수 있어
// 실무 예: 게시판 리스트 정렬 시 "날짜가 같으면 제목으로 정렬" 같은 거 구현할 때도 이런 식 논리 써.
