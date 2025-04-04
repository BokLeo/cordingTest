export {};
/*
📝 문제 설명
대문자와 소문자가 섞여 있는 문자열 s가 주어집니다.
문자열에서 'p'의 개수와 'y'의 개수를 비교해 같으면 true, 다르면 false를 return 하는 함수를 완성하세요.
단, 대소문자는 구별하지 않습니다. ('P'와 'p'는 같은 문자로 취급)

문자열에 'p'나 'y'가 하나도 없으면 항상 true를 리턴합니다.

📌 제한 사항
- 문자열 s의 길이는 1 이상 50 이하입니다.
- s는 알파벳으로만 이루어져 있습니다.

💡 입출력 예
s	return
"pPoooyY"	true
"Pyy"	false
*/

function solution(s: string): boolean {
	let p = 0,
		y = 0;
	[...s].forEach((el) => {
		if (el === "p" || el === "P") p += 1;
		if (el === "y" || el === "Y") y += 1;
	});
	return p === y;
}

console.log(solution("pPoooyY")); //	true

// 🔁 리팩토링 버전 (toLowerCase 사용)
function solution2(s: string): boolean {
	let p = 0,
		y = 0;
	[...s.toLowerCase()].forEach((el) => {
		if (el === "p") p++;
		if (el === "y") y++;
	});
	return p === y;
}

// ⭐ toLowerCase()로 전처리를 해주면 비교 조건이 줄어듬
// ⭐ 조건식이 간단해져서 가독성이 조금 더 올라가
