/*
점심시간에 도둑이 들어 일부 학생의 체육복이 도난당했어요.
체육 수업을 위해 여벌의 체육복을 가져온 학생이
도난당한 학생에게 빌려주는 방식으로
수업을 들을 수 있는 학생 수를 최대로 만들려고 해요.

✍ 입력 예시
n = 5
lost = [2, 4]
reserve = [1, 3, 5]

🧾 출력 예시
5

📌 설명
전체 학생 수 n = 5

- 2번과 4번 학생은 체육복을 도난당함.
- 1, 3, 5번 학생은 여벌 체육복을 가져옴.
- 여벌을 가져온 학생이 앞번호 또는 뒷번호 학생에게만 빌려줄 수 있음.
- → 이 경우 1→2, 3→4번에게 빌려주면 모두 수업 참여 가능.

⛓ 조건
- 전체 학생 수 n: 2 이상 30 이하
- 여벌과 도난이 겹치는 학생도 있을 수 있음
- 예: 어떤 학생은 도난도 당했고, 여벌도 있음
- 여벌과 도난이 겹치는 사람은 본인 거 입고 수업 참여 가능, 빌려줄 수 없음
*/

function solution(n: number, lost: number[], reserve: number[]) {
	const possible = new Set(reserve.filter((v) => lost.includes(v))); // 자기꺼 입으면 되는 친구들
	let realLost = lost.filter((v) => !possible.has(v)); // 아무것도 없는 친구들(빌려야함)
	let realReserve = reserve.filter((v) => !possible.has(v)); // 빌려줄 수 있는 친구들

	for (let i = 0; i < realLost.length; i++) {
		const lostStudent = realLost[i];

		if (realReserve.includes(lostStudent - 1)) {
			// 앞사람한테 빌림
			realReserve = realReserve.filter((v) => v !== lostStudent - 1);
		} else if (realReserve.includes(lostStudent + 1)) {
			// 뒷사람한테 빌림
			realReserve = realReserve.filter((v) => v !== lostStudent + 1);
		} else {
			// 못빌림
			n--;
		}
	}
	return n;

	// for (let i = 1; i <= n; i++) {
	// 	if (possible.has(i)) return;

	// 	if (realLost.includes(i)) {
	// 		// 앞이나 뒤에서 빌려야함
	// 		if (realReserve.includes(i - 1)) {
	// 			// 앞에서 빌릴때
	// 			realReserve.filter((v) => !(i - 1));
	// 		} else if (realReserve.includes(i + 1)) {
	// 			// 뒤에서 빌릴때
	// 			realReserve.filter((v) => !(i + 1));
	// 		} else {
	// 			return;
	// 		}
	// 		possible.add(i);
	// 	} else {
	// 		// 도난 당하지 않았음으로 자기꺼 입으면됨
	// 		possible.add(i);
	// 	}
	// }
	// return possible;
}

solution(5, [2, 4], [1, 3, 5]);

/*

❗ 주요 문제점
1. for 루프 안에서 return을 써버림 ❌
if (possible.has(i)) return;
이렇게 되면 i가 1일 때 possible에 포함되어 있으면 바로 함수 종료돼.
👉 이건 우리가 원하는 "수업 가능한 학생 수를 끝까지 계산"하는 흐름을 끊어버려.

2. realReserve.filter()는 새 배열을 만들 뿐, 원본을 수정하지 않음
realReserve.filter((v) => !(i - 1));
이건 i - 1이 뭔지를 비교하지 않고 그냥 false처럼 작동해. 게다가 filter는 결과를 반영하지 않으면 무의미해.

✔️ 해결 방법: splice나 filter → 재할당을 사용해야 돼.

✅ 개선된 코드
function solution(n: number, lost: number[], reserve: number[]) {
  const same = lost.filter((v) => reserve.includes(v));
  let realLost = lost.filter((v) => !same.includes(v));
  let realReserve = reserve.filter((v) => !same.includes(v));

  for (let i = 0; i < realLost.length; i++) {
    const student = realLost[i];
    
    if (realReserve.includes(student - 1)) {
      realReserve = realReserve.filter((r) => r !== student - 1);
    } else if (realReserve.includes(student + 1)) {
      realReserve = realReserve.filter((r) => r !== student + 1);
    } else {
      // 앞뒤 모두 못 빌림 → 수업 못 듣는 학생 1명 남음
      n--;
    }
  }

  return n;
}
🔍 설명 흐름
- 겹치는 사람 정리
- 여벌 있고 도난도 당한 사람은 same
- 실제 빌려야 하는 사람 realLost, 실제 빌려줄 수 있는 사람 realReserve
- 실제로 빌려주는 로직
- 앞 번호가 여벌 있으면 빌림 + 제거
- 없으면 뒷번호에서 시도
- 둘 다 없으면 → 체육 못 듣는 학생 → n--

✅ 실행 결과 확인
solution(5, [2, 4], [1, 3, 5]); // ✅ 결과: 5


*/

/*
모든 사람들 전부 돌 필요없이 잃어버린(빌려야하는) 사람만 빌릴수 있는지 없는지를 검사하면 되는거네?


ChatGPT의 말:
💯 정답이야 성복아!! 정말 중요한 포인트를 정확히 짚었어 👏

✅ 핵심 아이디어 정리
모든 학생을 검사할 필요 없다.
왜냐하면, 빌려야 하는 건 ‘잃어버린 사람(lost)’ 뿐이니까!

🧠 문제 구조 다시 보기
n: 전체 학생 수

lost: 체육복을 잃어버린 학생들

reserve: 여벌 체육복을 가진 학생들

💡 우리가 궁금한 건?
도난당한 학생(lost) 중에서
→ 앞번호나 뒷번호가 여벌 있는지 확인
→ 가능하면 빌리고, 아니면 수업 못 들음 → n--

✅ 그러니까 이렇게 되는 거야:
ts
복사
for (let i = 0; i < realLost.length; i++) {
  const student = realLost[i];

  if (realReserve.includes(student - 1)) {
    // 앞에서 빌림
    realReserve = realReserve.filter((r) => r !== student - 1);
  } else if (realReserve.includes(student + 1)) {
    // 뒤에서 빌림
    realReserve = realReserve.filter((r) => r !== student + 1);
  } else {
    // 아무도 안 빌려줌 → 수업 못 들음
    n--;
  }
}
👉 이렇게 하면 lost에 있는 학생만 검사하니까 훨씬 효율적이고, 읽기도 쉬워!

📦 실무 감각 예시
이런 로직은 실제 실무에서도 자주 써:

“에러 난 사용자만 필터링해서 복구 시도”

“재고가 없는 상품만 다시 확인”

불필요하게 모든 유저/상품을 검사하지 않고, 진짜 처리해야 하는 대상만 순회하는 게 실전 최적화야.

*/
