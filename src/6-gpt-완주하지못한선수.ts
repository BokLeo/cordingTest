/*
🎒 완주하지 못한 선수
📘 문제 설명
	수많은 마라톤 선수들이 마라톤에 참여하였지만, 단 한 명의 선수가 완주하지 못하였다.
	마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
	완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
	완주하지 못한 선수의 이름을 return 하도록 함수를 작성하라.

📌 제한 사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant보다 정확히 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

🧪 입출력 예
participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]
return => "leo"

participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
completion = ["josipa", "filipa", "marina", "nikola"]
return => "vinko"

*/
const participant = ["leo", "kiki", "eden", "kiki"];
const completion = ["eden", "kiki", "leo"];

function solution1(participant: string[], completion: string[]) {
	return participant.filter((v) => !completion.includes(v))[0];
}

console.log(solution1(participant, completion));
// ❌ 위 방법은 '동명이인'을 검출하지 못함

function solution2(participant: string[], completion: string[]) {
	return participant.find((v) => !completion.includes(v));
}

console.log(solution2(participant, completion));
// ❌ 위 방법은 '동명이인'을 검출하지 못함

// 💡  "등장 횟수를 정확히 비교하는 자료구조", 즉 Map이나 객체(Object)를 써야 정확히 풀 수 있음.

function solution3(participant: string[], completion: string[]) {
	const map = new Map();

	participant.forEach((name) => {
		map.set(name, (map.get(name) || 0) + 1);
	});

	completion.forEach((name) => {
		map.set(name, (map.get(name) || 0) - 1);
	});

	for (const [name, count] of map) {
		if (count > 0) return name;
	}
}

console.log(solution3(participant, completion));

/*

🧠 실무에서 연결 포인트
- 장바구니 수량 체크 (추가/삭제)
- 투표 수 비교
- API 호출 횟수 비교 (예: 요청과 응답 쌍 확인)
- 재고 수량 맞춰보기

	이 구조는 진짜 실무에서도 엄청 자주 쓰여.
	해시맵 기반 누적/차감 패턴은 실무에서 꼭 익혀야 할 패턴이야.

*/
