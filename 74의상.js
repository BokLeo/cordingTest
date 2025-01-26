"use strict";
/*
    "코니의 옷 조합하기!"
    - 각 종류별로 최대 1가지 의상만 착용 가능.
    - 1가지만 달라도 다른 코디!
    - 하루에 최소 1개는 입어!

    - 의상들이 담긴 2차원 배열 clothes
    - 서로다른 옷의 조합 수 return

    [제한 사항]
    - clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
    - 코니가 가진 의상의 수는 1개 이상 30개 이하입니다.
    - 같은 이름을 가진 의상은 존재하지 않습니다.
    - clothes의 모든 원소는 문자열로 이루어져 있습니다.
    - 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.

*/
function 의상(clothes) {
    const itemKind = {};
    clothes.forEach(([item, type]) => {
        itemKind[type] ? itemKind[type]++ : itemKind[type] = 1;
    });
    return Object.values(itemKind).reduce((acc, num) => acc * (num + 1), 1) - 1;
}
// console.log(의상([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])); // 	5
console.log(의상([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])); // 	3
//# sourceMappingURL=74%EC%9D%98%EC%83%81.js.map