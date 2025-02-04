"use strict";
/*
    'H-index' - 정렬
    - 발표한 논문 n편
    - h번 이상 인용된 논문 h편 이상
    - h번 이하 인용
*/
function Hindex(citations) {
    const max = Math.max(...citations);
    if (max === 0)
        return 0;
    for (let h = max; h >= 0; h--) {
        let 인용횟수 = 0;
        let 나머지논문arr = [];
        citations.map((val, idx, arr) => {
            if (h <= val)
                인용횟수++;
            if (h >= val)
                나머지논문arr.push(val);
        });
        if (인용횟수 >= h && h >= Math.max(...나머지논문arr))
            return h;
    }
}
console.log(Hindex([3, 0, 6, 1, 5])); // 	3
console.log(Hindex([5, 6, 7, 8])); // 	4
console.log(Hindex([0, 0, 0])); // 	0
console.log(Hindex([6, 5, 3, 3, 0])); // 	3
//# sourceMappingURL=75Hindex.js.map