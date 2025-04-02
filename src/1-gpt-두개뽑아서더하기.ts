/*
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
더해서 만들 수 있는 모든 값을
배열에 담아 
return 하도록 
solution 함수를 완성하세요.

단, 결과 배열에는 중복된 값이 없어야 하며, 오름차순으로 정렬해서 return 해주세요.

✍ 입력 예시
numbers = [2, 1, 3, 4, 1]
🧾 출력 예시
[2, 3, 4, 5, 6, 7]

*/

function solution(numbers: number[]) {
	const answer = new Set<number>();
	numbers.forEach((el1, idx1) => {
		numbers.forEach((el2, idx2) => {
			if (idx1 === idx2) return;
			// ❌ 두번째 forEach문에서 tmp를 생성하기 때문에 tmp는 항상 비어있기 때문에 의미없다.
			const tmp = new Set<number>(); // 동일한 수를 더하는 것은 불필요한 동작이기 때문에, 중복 방지를 위한 tmp
			if (!tmp.has(el2)) {
				tmp.add(el2);
			} else {
				return;
			}
			let sum = el1 + el2;
			if (!answer.has(sum)) answer.add(sum);
		});
	});

	return Array.from(answer).sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);

/*
🧠 개선 포인트
중복 검사용 tmp Set은 루프 내부에서 매번 새로 만들어지고 있어서 무의미해.
tmp는 각 el1마다 유효하지만, 현재 구조에서는 el2마다 초기화됨 = 항상 비어있음.
의미 없는 조건 검사와 리턴.

⭐ 어차피 (i, j)와 (j, i)는 같은 값을 만들기 때문에, i < j인 경우만 계산하면 효율적이야.

🛠 개선 코드
function solution(numbers: number[]) {
  const answer = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      answer.add(sum);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}

🔗 실무 감각 연결
- Set을 통해 중복 제거: 실제 프론트엔드에서도 필터링이나 중복 방지용으로 자주 씀.

- 이중 반복문 최적화 (j = i + 1): 렌더링이나 계산량 많은 곳에서 성능 차이를 유의하게 만듦.

- 정렬 후 반환: 사용자에게 보여줄 데이터를 정돈하는 습관은 UI/UX에서 굉장히 중요함.
*/
