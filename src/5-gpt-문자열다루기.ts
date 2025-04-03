/*
	문제 설명
	문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성되어 있는지 확인해주는 함수를 완성하라.
	예를 들어 s가 "a234"이면 false를 리턴하고 "1234"라면 true를 리턴하면 된다.

	제한 사항
	- s는 길이 1 이상, 길이 8 이하인 문자열이다.
	- s는 0부터 9까지의 숫자 혹은 알파벳으로 이루어져 있다.
	

	입출력 예
	s	return
	"a234"	false
	"1234"	true
 */

function useTry(str: string) {
	const strArr = str.split("");
	if (strArr.length !== 4 && strArr.length !== 6) return false;

	try {
		strArr.forEach((el) => {
			if (isNaN(Number(el))) throw new Error();
		});
		return true;
	} catch (error) {
		return false;
	}
}

useTry("a234");
useTry("1234");

function useEvery(str: string) {
	const strArr = str.split("");
	if (strArr.length !== 4 && strArr.length !== 6) return false;

	return strArr.every((el) => !isNaN(Number(el)));
}

console.log(useEvery("a234"));
console.log(useEvery("1234"));

/*
	every()는 배열 내 모든 요소가 조건을 만족하는지 확인할 때 아주 유용해.

	프론트엔드에서 사용자 입력 검증할 때, 예를 들어:

	주민번호, 전화번호, OTP 등 숫자 입력 체크

	배열 필터링 후 상태 전부 완료인지 확인할 때 (todos.every(todo => todo.done))

*/
