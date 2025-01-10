"use strict";
function solution(triangle) {
    let answer = 0;
    let arr = [];
    let checker = [];
    for (let 층 = 0; 층 < triangle.length; 층++) {
        for (let 번 = 0; 번 < triangle[층].length; 번++) {
            if (triangle[층].length === 1)
                arr.push(triangle[층][번]);
            if (층 === 1) {
                let preChild = [triangle[층 + 1][번], triangle[층 + 1][번 + 1]];
                console.log(preChild);
            }
        }
    }
    return answer;
}
// console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));  // result : 30
solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
