"use strict";
/*
    '기능 개발' - 스택/큐
    - 기능 개선 중
    - 진도 100%일때 서비스에 반영 가능

    - 기능 별 개발 속도는 모두 다름
    - A, B, C, D 중 A보다 B가 먼저 개발되면 A 배포때 같이 배포된다.

    - 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses, 각 작업의 개발 속도가 적힌 정수 배열 speeds
    - 각 배포마다 몇 개의 기능이 배포되는지를 return

    [제한 사항]
        - 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
        - 작업 진도는 100 미만의 자연수입니다.
        - 작업 속도는 100 이하의 자연수입니다.
        - 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
            > 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
*/
function 기능개발(progresses, speeds) {
    let result = [];
    let incompleteRate = progresses.map(val => 100 - val);
    while (incompleteRate.length > 0) {
        for (let i = 0; i < incompleteRate.length; i++) {
            incompleteRate[i] -= speeds[i];
        }
        if (incompleteRate[0] <= 0) {
            let cnt = 0;
            while (incompleteRate[1] <= 0) {
                incompleteRate.splice(1, 1);
                speeds.splice(1, 1);
                cnt++;
            }
            incompleteRate.splice(0, 1);
            speeds.splice(0, 1);
            result.push(++cnt);
        }
    }
    return result;
}
// progresses	speeds	return
// console.log(기능개발([93, 30, 55],	[1, 30, 5])); //	[2, 1]
console.log(기능개발([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //	[1, 3, 2]
//# sourceMappingURL=79%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C.js.map