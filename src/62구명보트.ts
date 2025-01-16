/*
	[탐욕법(Greedy)]
	
	- 무인도에 갇힌 사람을 구명보트로 구하자!
	- 한번에 최대 2명만 가능
	- 몸무게 제한이 있다.
		> ex. [70kg, 50kg, 80kg, 50kg] => 2번째, 4번째 사람은 같이 탈 수 있다.
	
	- 구명보트를 최대한 적게 사용하여 모든 사람을 구출해보자!

	- 제공되는 것 : ([]:number 몸무게, number 무게 제한)
	- return : 모든 사람을 구출하기 위해 필요한 구명보트 개수

	[제한 사항]
	- 무인도에 갇힌 사람 : 1 < n <= 50000
	- 각 몸무게 : 40 < n < 240
	- 구명보트의 무게 제한 : 40 <= n <=240
	- 사람들을 구출할 수 없는 경우는 없다.

	[입출력 예]
	people						limit				return
	[70, 50, 80, 50]	 100					3	
	[70, 80, 50]			 100					3
*/

// function 구명보트(people:[number]){}  # 💡Ts에서 해당 코드는 '요소의 타입과 개수를 고정한 자료 구조'

function 구명보트(people:number[], limit:number){
	people.sort((a,b) => b-a);

	let boatCnt = 0;
	let 대기중인손님의몸무게 = 0;
	let 승선인원 = 0;


	let 짝수 = -1;
	let 홀수 = 0;
	for(let i=0; i<people.length; i++){

		const 승객 = (i===0 || i%2===0) ? people[++짝수] : people[people.length - ++홀수];
		const calc = limit - (대기중인손님의몸무게 + 승객);

		if(calc > 0){
			// 남아
			대기중인손님의몸무게 += 승객;
			++승선인원;
		}else if(calc === 0){
			// 떠나
			대기중인손님의몸무게 = 0;
			++boatCnt;
			승선인원 = 0;
		}else if(calc < 0){
			// 떠나고 남아
			++boatCnt;
			대기중인손님의몸무게 = 대기중인손님의몸무게 > 승객 ? 승객 : 대기중인손님의몸무게;
			// 승선인원은 떠나고(-1) 남음(+1)으로 그대로
		}

		if(승선인원 === 2){
			// 떠나
			대기중인손님의몸무게 = 0;
			++boatCnt;	
			승선인원 = 0;
		}
	}
	
	return 승선인원 ? ++boatCnt : boatCnt;
}
console.log(구명보트( [150, 120, 80, 80, 70, 40], 150)); // 기댓값 : 4  ===> 결과 : 5
/*
	오류 위치 : '대기중인손님의몸무게 = 대기중인손님의몸무게 > 승객 ? 승객 : 대기중인손님의몸무게;'
	오류 원인 : 
		- 앞/뒤 번갈아 값이 들어올 때 항상 작은수가 남는다면 [작]>작 순서가 될 수 있음 => [작, 작]으로 나갈경우 손해임
		- 큰수를 남겻을때 작은수가 들어오면 작은수가 먼저 나가기때문에 손해임

	[ 큰 수를 남겼을 때]
	150			[  ]			1
	40			[40]			
	120			[120]			2 -> 40 혼자 나감 => 에러
	70			[70]			3
	80								4
	80								5

	[ 작은 수를 남겼을 때]
	150			[  ]			1
	40			[40]			
	120			[40]			2 -> 120 혼자 나감
	70			[  ]			3 -> 2개되서 나감
	80			[80]
	80			[80]			4 -> 80 혼자 나감
	=> 잔여인원(1)		 5

*/

// 2번째 시도
/*
	효율성 테스트 실패
	문제 원인 : 
		- Array.shift()의 경우 맨 앞을 지우는 메서드.
		- 맨 앞 엘리먼드를 지우고 한칸씩 앞으로 땡김 => O(n)
		- while 루프 안에서 shift()와 pop()을 반복적으로 호출하면서,
			배열 크기가 줄어드는 동안 O(n)의 작업이 계속 실행됨 => 큰 작업일 수록 => 시간복잡도 O(n^2)에 가까워짐.
*/
function test(people:number[], limit:number){
	let boatCnt = 0;
	people.sort((a,b)=> b-a);

	while(people.length > 1 ){
		const sum = people[0] + people[people.length - 1];

		if(limit < sum){
			// 큰놈만 나감
			people.shift();
			boatCnt++;
		}else if(limit > sum){
			// 둘다 나감
			people.shift();
			people.pop();
			boatCnt++;
		}else{
			// 둘다 나감
			people.shift();
			people.pop();
			boatCnt++;
		}
	}

	return people.length ? ++boatCnt : boatCnt;
}


/*
	"GPT 방식 - 투 포인터 방식"
	- 투 포인터 방식은 배열을 정렬한 뒤, 양 끝에서 인덱스를 이용해 요소를 선택하며 동작합니다.
	- shift가 가장 큰 병목: 매번 배열의 첫 번째 요소를 제거할 때마다 나머지 요소를 이동해야 하므로 비효율적.
	- 배열을 수정하지 않고 인덱스를 사용한 접근이 훨씬 효율적입니다.

										기존코드												개선안(투 포인터)
	시간 복잡도					O(n^2) (shift 반복)					O(nlogn) (정렬 + 투 포인터)
	공간 복잡도					O(1)																O(1)
		효율성		비효율적, 큰 배열에서 느림				효율적, 대규모 배열에서 빠름
	코드 가독성					중간													더 간결하고 직관적
*/
function solution(people:number[], limit:number){
	// 내림차순으로 정렬 (가장 무거운 사람을 먼저 처리하기 위해)
	people.sort((a, b) => b - a);

	let left = 0; // 가장 무거운 사람의 인덱스
	let right = people.length - 1; // 가장 가벼운 사람의 인덱스
	let boatCount = 0;

	while (left <= right) {
		const heaviest = people[left]; // 가장 무거운 사람
		const lightest = people[right]; // 가장 가벼운 사람

		// 무거운 사람과 가벼운 사람이 함께 탈 수 있는 경우
		if (heaviest + lightest <= limit) {
				right--; // 가벼운 사람을 포함
		}

		// 무거운 사람은 항상 보트에 태움
		left++;
		boatCount++; // 보트 사용 횟수 증가
	}

	return boatCount;
}


/*
	- 💡 배열 요소를 delete(index)로 삭제할 수 있음
		> delete로 삭제한 배열은 길이가 줄어들지 않음.
		 	엘리먼트가 empty로 변경됨(undefinde와는 상이한 Hole임)
*/
// 3번째 시도
function test(people:number[], limit:number){
	let boatCnt = 0;
	people.sort((a,b)=> b-a);

	let leftIdx = 0;
	let rightIdx = people.length - 1;

	for(const i of people){
		const sum = people[leftIdx] + people[rightIdx];
		if(limit < sum){
			// 큰놈만 나감
			leftIdx++;
			boatCnt++;
		}else{
			// 둘다 나감
			leftIdx++;
			rightIdx--;
			boatCnt++;
		}

		if(!(leftIdx < rightIdx)) break;
	}
		
	return leftIdx === rightIdx ? ++boatCnt : boatCnt;
}

console.log(test( [150, 120, 80, 80, 70, 40], 150)); // 4
// 150		[]				1
// 40			[40]
// 120		[120]			2
// 70			[70]			3
// 80								4
// 80								5

// 150		[]				1
// 40			[40]			
// 120		[40]			2
// 70								3
// 80			[80]			
// 80								4

// console.log(test( [70, 50, 80, 50], 100)); // 3
// console.log(test( [70, 80, 50], 100)); // 3

