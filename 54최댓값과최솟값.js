"use strict";
function 최댓값과최솟값(s) {
    let arr = s.split(' ').map(item => Number(item));
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `${min} ${max}`;
}
console.log(최댓값과최솟값("1 2 3 4")); // "1 4"
console.log(최댓값과최솟값("-1 -2 -3 -4")); // "-4 -1"
//# sourceMappingURL=54%EC%B5%9C%EB%8C%93%EA%B0%92%EA%B3%BC%EC%B5%9C%EC%86%9F%EA%B0%92.js.map