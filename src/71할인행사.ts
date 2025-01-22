/*
	"할인 행사"
	- XYZ 마트 -> 구독 10일
	- 매일 1가지 할인 행사(1개씩만 구매 가능)
	- 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할때 회원가입

	- 원하는 제품이 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
	- XYZ 마트에서 14일간 회원 할인 이벤트
	- 날짜 순서대로 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나
	-> 셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입

	- want : 원하는 제품을 나타내는 문자열 배열 
	- number : 원하는 제품의 수량을 나타내는 정수 배열 
	- discount : XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열
	- return : 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수
	(만약 가능한 날이 없다면 0)

	[제한 사항]
	- 1 ≤ want의 길이 = number의 길이 ≤ 10
		- 1 ≤ number의 원소 ≤ 10
		- number[i]는 want[i]의 수량을 의미하며, number의 원소의 합은 10입니다.
	- 10 ≤ discount의 길이 ≤ 100,000
	- want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
		- 1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12
*/

function 할인행사(want:string[], number:number[], discount:string[]) {
	const numSum = number.reduce((sum, cur)=> sum += cur);

	let day = 1;
	let result = [];

	while((discount.length+1)-day >= numSum){
		const obj = Object.fromEntries(want.map((key, index) => [key, number[index]]));
		let sum = Object.values(obj).reduce((acc, value) => acc + value, 0);

		for(let i=day; i<=10+day; i++){
			if(want.includes(discount[i-1]) && obj[discount[i-1]] !== 0){
				obj[discount[i-1]] -= 1;
				sum--;
			}else{
				if(sum === 0) result.push(day);

				day++;
				break;
			}
		}	
	}
	return result.length;
}

console.log(할인행사(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])); //	3
// console.log(할인행사(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])); //	0


/*
	[코드 단점 및 개선 가능 사항]
	- 슬라이딩 윈도우 알고리즘
		> 시간복잡도 절약 가능
		> 현재 시간 복잡도: 𝑂(𝑛×𝑚), 여기서 𝑛은 discount 배열의 길이, 𝑚은 10일간의 길이.
		💡 슬라이딩 윈도우를 활용하면 중복 계산을 피할 수 있습니다. 10일간의 discount를 윈도우로 유지하며, 매번 첫 번째 요소를 제거하고 새 요소를 추가하는 방식으로 효율적으로 비교할 수 있습니다.
				> 시간 복잡도 : 𝑂(𝑛)

	- 불필요한 객체 생성
		> 루프 내 객체 생성 > 메모리 낭비 및 성능 저하
		💡 Object.fromEntries를 매번 생성하는 대신, 초기 한 번만 생성한 후 업데이트하는 방식으로 객체를 재사용할 수 있습니다.
			>	currentMap을 업데이트하는 방식 > 메모리 사용 최적화

	-루프 조건으로 인한 가독성 저하
		> day 직접 증가 / break 루프 직접 종료
		> sum === 0일 때 result에 day를 추가하는 조건이 내부 루프에 있어, 로직 흐름이 산만함.
		💡루프 조건과 결과 검증 논리를 별도로 처리하여 코드 가독성을 높일 수 있습니다.
			> 검증 논리를 별도 함수(isValid)로 분리
*/

function 할인행사2(want: string[], number: number[], discount: string[]): number {
  const wantMap = Object.fromEntries(want.map((key, index) => [key, number[index]]));
  const numSum = number.reduce((sum, cur) => sum + cur, 0);
  const currentMap: Record<string, number> = {};

  // 초기 윈도우 설정
  for (let i = 0; i < 10; i++) {
    currentMap[discount[i]] = (currentMap[discount[i]] || 0) + 1;
  }

  let result = 0;

  for (let i = 10; i <= discount.length; i++) {
    // 현재 윈도우가 조건을 만족하는지 확인
    if (isValid(wantMap, currentMap)) {
      result++;
    }

    // 슬라이딩 윈도우: 왼쪽 제거, 오른쪽 추가
    const leftItem = discount[i - 10];
    const rightItem = discount[i];

    if (leftItem) {
      currentMap[leftItem]--;
      if (currentMap[leftItem] === 0) delete currentMap[leftItem];
    }
    if (rightItem) {
      currentMap[rightItem] = (currentMap[rightItem] || 0) + 1;
    }
  }

  return result;
}

// 조건 검증 함수
function isValid(wantMap: Record<string, number>, currentMap: Record<string, number>): boolean {
  return Object.keys(wantMap).every((key) => wantMap[key] <= (currentMap[key] || 0));
}