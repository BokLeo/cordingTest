/*	
	"영어 끝날잇기"
	- 1~n까지의 번호가 붙은 n명의 사람
	- 영어 끝날잇기를 함
	1. 1번부터 번호 순서대로 단어 말함
	2. 마지막 다음 -> 1번
	3. 앞사람 단어의 마지막 단어
	4. 이전 등장 단어 재사용 X
	5. 한글자 x

	ex. tank → kick → know → wheel → land → dream → mother → robot → tank(탈락)

	[제한 사항]
	- 2 <= n <= 10
	- words에 끝말잇기에 사용될 단어들이 순서대로 들어있는 배열, 길이는 n <= word.length <= 100
	- 2 <= 단어의 길이 <= 50
	- 알파벳 소문자만
	- 정답은 탈락되는 [ 번호, 차례 ] 형태로 return
	- 탈락자 없음은 [0,0]

	[입출력 예]
	n	words	result
	3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
	5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
	2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]
*/

function 영어끝말잇기(n:number, words:string[]){
	const 중복검사 = (arr: any[]): any[] => {
		return arr.filter((item, index) => arr.indexOf(item) !== index);
	};
	const 이어말하기검사 = (arr: string[]): number | -1 => {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i].slice(-1) !== arr[i + 1][0]) {
				return i + 1; // 틀린 단어의 인덱스를 반환
			}
		}
		return -1; // 모든 단어가 조건을 만족하면 -1 반환
	};

	const 중복검사결과 = 중복검사(words);
	const 이어말하기결과 = 이어말하기검사(words)+1;
	if(중복검사결과.length > 0){
		// console.log(`❌ 중복 검사 : 중복 존재`);
		const findSecondOccurrence = (arr: any[], target: any): number => {
			const occurrences = arr
				.map((item, index) => (item === target ? index : -1)) // 대상 문자 위치 저장
				.filter(index => index !== -1); // 유효한 인덱스만 추출
		
			return occurrences.length >= 2 ? occurrences[1] : -1; // 두 번째 등장 위치 반환
		};
		const 중복된인덱스 = findSecondOccurrence(words, 중복검사결과[0]);
		const 중복된문자열번호 = 중복된인덱스+1;
		const 사람번호 = Math.floor(중복된문자열번호/n);	// 몇번째사람
		const 바퀴수 = Math.ceil(중복된문자열번호/n); // 몇바퀴
		
		return [사람번호, 바퀴수];		
	}else if(이어말하기결과> 0){
		// console.log(`❌ 이어말하기 검사 : 이어말하기 실패, ${이어말하기결과}`);
		const 사람번호 = Math.floor(이어말하기결과%n);
		const 바퀴수 = Math.ceil(이어말하기결과/n);

		return [사람번호, 바퀴수];		
	}else{
		// console.log(`✅ 검사되지 않음`);
		return [0,0]
	}
}

/*
	위 코드는 중복된 검사에서 먼저 중복된 요소의 인덱스를 반환하여 실패함
	- 영어끝말잇기(3, ["abc", "cbd", "ddd", "ddd", "dbc", "cbd"]) 일때
	- "cbd"가 먼저 중복되지만 잘못된 순서는 아님
	- "ddd"는 바로 뒤에 "ddd"가 옴 <- 얘가 잘못됨
*/

function 영어끝말잇기2(n:number, words:string[]){
	let passArr :string[] = [];

	let 사람번호:number = 0;
	let 바퀴수:number = 0;

	for(let idx=0; idx<words.length; idx++){
		if(passArr.length === 0) {
			passArr.push(words[idx]);
		}else{
			let preWord = passArr[passArr.length-1];
			let nextWord = words[idx];

			if(preWord[preWord.length-1] === nextWord[0]){
				// console.log(`앞뒤 문자열이 같은지 체크`);
				if(preWord !== nextWord){
					// console.log(`글자가 똑같은지 체크`);
					let count = 0;
					passArr.findIndex((item, idx)=>{
						if(item === nextWord) count++;
					})
					if(count === 0){
						passArr.push(nextWord);
					}else{
						// console.log(`이미 똑같은 단어가 나왓다면 실패`);
						사람번호 = Math.ceil(idx % n) + 1;
						바퀴수 = Math.ceil((idx+1)/n);
					}

				}else{
					// console.log(`글자가 똑같으면 실패`);
					사람번호 = Math.ceil(idx % n) + 1;
					바퀴수 = Math.ceil((idx+1)/n);
				}
			}else{
				// console.log(`앞뒤 문자열이 틀리면 실패`);
				사람번호 = Math.ceil(idx % n) + 1;
				바퀴수 = Math.ceil((idx+1)/n);
			}
		}

		

		if(사람번호 !== 0) break;
	}
	
	return [사람번호, 바퀴수];
}

// console.log(영어끝말잇기2(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // => [3,3]
// console.log(영어끝말잇기2(2,	["hello", "one", "even", "never", "now", "world", "draw"])); // => [1,3]
// console.log(영어끝말잇기2(5,	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0,0]
// console.log(영어끝말잇기2(3, ["abc", "cbd", "ddd", "ddd", "dbc", "cbd"]));  // [1,2]
// console.log(영어끝말잇기2(2, ["kick", "kick"]));  // [2, 1]
// console.log(영어끝말잇기2(3, ["aba", "aba", "bba"]));  // [2, 1]
// console.log(영어끝말잇기2(2, ["hello", "one", "even", "nh", "hell", "level", "low"]));  // [0,0]
// console.log(영어끝말잇기2(2, ["abc", "dca"]));  // [2,1]
// console.log(영어끝말잇기2(3, ["tank", "kick", "know", "kick"]));  // [1,2]
// console.log(영어끝말잇기2(2, ["tank", "kick", "kick", "know"]));  // [1,2]
// console.log(영어끝말잇기2(2, ["hello", "one", "even", "never", "row", "world", "draw"]));  // [0,0]
// console.log(영어끝말잇기2(2, ["hello", "one", "even", "never", "now", "world", "raw"]));  // [1,3]
// console.log(영어끝말잇기2(2, ['ac','ca','ac','ac']));  // [1,2]


/* 💡 현재 코드는 통과합니다.
	- 하지만 for 루프에 따라 증가하는 passArr의 findIndex는 갯수에 비례하여 증가합니다.
		> passArr.finIndex 는 각 루프에서 최대 O(k) 실행됩니다.
		> k는 passArr의 길이. (최악의 경우, 내부 연산은 O(1 + 2 + 3 + ... + (m - 1)) = O(m²));
	
	- ⭐ 집합(Set)을 사용해보자!
		> 집합을 사용하면 존재 확인을 O(1)에 확인가능하다.
		> Set의 add와 has연산은 평균적으로 O(1)이다.
		>> 개선된 코드는 O(m)의 시간복잡도를 가질수 있다.
*/

function 영어끝말잇기3(n:number, words:string[]) {
	const passSet = new Set(); // 중복 확인을 위한 집합
	let 사람번호 = 0;
	let 바퀴수 = 0;

	for (let idx = 0; idx < words.length; idx++) {
			const preWord = words[idx - 1];
			const nextWord = words[idx];

			if (
					(preWord && preWord[preWord.length - 1] !== nextWord[0]) || // 앞뒤 글자 확인
					passSet.has(nextWord) // 중복 단어 확인
			) {
					사람번호 = (idx % n) + 1;
					바퀴수 = Math.ceil((idx + 1) / n);
					break;
			}

			passSet.add(nextWord); // 새로운 단어 추가
	}

	return [사람번호, 바퀴수];
}
