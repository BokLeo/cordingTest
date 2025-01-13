function JadenCase(s: string): string {
	return s
			.split(' ') // 공백을 기준으로 분리 (연속된 공백 처리 가능)
			.map((word) => {
					// 빈 문자열 처리
					if (word === '') return '';

					// 첫 글자가 숫자인 경우, 대소문자 변환 없이 그대로 반환
					if (!isNaN(Number(word[0]))) {
							return word[0] + word.slice(1).toLowerCase();
					}

					// 일반적인 경우: 첫 글자는 대문자, 나머지는 소문자로 변환
					return word[0].toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(' '); // 공백으로 다시 결합
}

console.log(JadenCase("   3people   unFollowed   me   "));