"use strict";
/*
    '전화번호 목록' - 해시
    - 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
    - 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.
        > 구조대 : 119
        > 박준영 : 97 674 223
        > 지영석 : 11 9552 4421

    - phone_book : 전화번호를 담은 배열

    - return :
        > 접두어인 경우가 있으면 : false
        > 그렇지 않으면 : true
    
    [제한사항]
    - phone_book의 길이는 1 이상 1,000,000 이하입니다.
        > 각 전화번호의 길이는 1 이상 20 이하입니다.
        > 같은 전화번호가 중복해서 들어있지 않습니다.
*/
// function 전화번호목록(phone_book:string[]) {
// 	const result = phone_book.some(number => {
// 		return phone_book.some(el => {
// 			if(number !== el) return number.startsWith(el);
// 		});
// 	});
// 	return !result;
// }
/*
    ❌ 배열의 최대 길이 : 1,000,000 개
        > some()을 이용한 비교 방식 : O(N^2)
         👎 최악의 경우 : 1,000,000 * 1,000,000 = 10^12 연산
        => 효율성 실패
*/
// ☑️ [Best 직관성] => O(N log N + N * K) 💡정렬 시간복잡도 : O(N log N)
function 전화번호목록2(phone_book) {
    phone_book.sort(); // 숫자로 이루어진 번호를 정렬하면 접두사가 동일하다면 가깝게 정렬된다.
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i]))
            return false;
    }
    return true;
}
// ✅ [Best Speed]	해시(Map) 활용 방법 => O(N * K)
function 전화번호목록3(phone_book) {
    const hashMap = new Map();
    phone_book.forEach(el => hashMap.set(el, true));
    for (let number of phone_book) {
        for (let i = number.length - 1; i > 0; i--) {
            if (hashMap.has(number.slice(0, i)))
                return false;
        }
    }
    return true;
}
console.log(전화번호목록3(["119", "97674223", "1195524421"])); //	false
console.log(전화번호목록2(["123", "456", "789"])); //	true
console.log(전화번호목록2(["12", "123", "1235", "567", "88"])); //	false
console.log(전화번호목록2(["0", "00"])); //	false
console.log(전화번호목록2(["112", "119", "912"])); //	true
console.log(전화번호목록2(["0", "10"])); // true
//# sourceMappingURL=84%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8%EB%AA%A9%EB%A1%9D.js.map