export {}; // 이 파일을 모듈로 간주하게 만듦
/*
	🧾 문자열 내림차순으로 배치하기
	📘 문제 설명
	문자열 s에 나타나는 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수를 완성하라.
	s는 영어 대소문자로만 구성되어 있고, 대문자는 소문자보다 작은 것으로 간주한다.

	📌 제한 사항
	s는 1 이상 100,000 이하인 문자열입니다.

	🧪 입출력 예

	solution("Zbcdefg") // ➜ "gfedcbZ"
	g > f > e > d > c > b > Z 순서로 정렬됨

	solution("abc") // ➜ "cba"

*/

const param = "aZbYc";

function solution(s: string) {
	const isUpperCase = (s: string) => {
		return s === s.toUpperCase();
	};

	const str = s.split("");
	str.sort((a, b) => {
		return b.localeCompare(a);
	});

	let upperCase: string[] = [];
	const newStr = str.filter((el) => {
		if (isUpperCase(el)) {
			upperCase.push(el);
		} else {
			return true;
		}
	});

	return (
		newStr.join("") +
		upperCase
			.sort((a, b) => {
				return b.localeCompare(a);
			})
			.join("")
	);
}

console.log(solution(param));

// 😠 너무 복잡하게 푼 거야 – 결국 정렬된 걸 다시 쪼개고, 또 정렬하고 있어서 문제의 단순한 본질에 비해 과해진 로직

/*
📌 하지만 다시 강조하면...
사실 이 전체 과정을 이렇게 분리할 필요 없이, 그냥 이렇게 하면 끝이야:
*/
function solution2(s: string): string {
	return s
		.split("")
		.sort((a, b) => b.localeCompare(a))
		.join("");
}

/*
대문자/소문자 전부 한 번에 정렬됨

문제에서 요구하는 "대문자는 소문자보다 작다"도 localeCompare로 만족됨

💡 실무 감각 요약
로직은 짧고 명확할수록 좋다

이미 원하는 기준대로 정렬됐다면, 그걸 굳이 쪼개서 다시 손보지 말자

문자열 정렬 후 따로 조작하면 기준이 꼬일 위험이 크다
*/
