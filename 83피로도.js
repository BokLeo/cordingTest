"use strict";
/*
    '피로도' - 완전탐색
    - 게임에 피로도 시스템이 있음(0이상의 정수)
    - 피로도로 던전 탐험
    - 최소 필요 피로도 : 탐험을 시작하기 위해 필요한
    - 소모 필요도 : 던전 탐험을 마쳣을때 소모되는

    ex. 최소 피로도 : 80 / 소모 피로도 : 20 인 던전을 탐험하기 위해선
        > 유저 : 현재 남은 피로도 80 이상, 던전 탐험 후 피로도 -20

        - 하루에 한번씩 탐험 할 수 있는 던전이 여러개
        - 한 유저가 오늘 최대한 많이 탐험하려함

        - 현재 피로도 k
        - [각 던전별 최소 필요 피로도 , 소모 피로도] -> 2차원 배열 dungeons

        유저가 탐험 할 수 있는 최대 던전 수 return

    [제한사항]
        - k는 1 이상 5,000 이하인 자연수입니다.
        - dungeons의 세로(행) 길이(즉, 던전의 개수)는 1 이상 8 이하입니다.
        - dungeons의 가로(열) 길이는 2 입니다.
        - dungeons의 각 행은 각 던전의 ["최소 필요 피로도", "소모 피로도"] 입니다.
        - "최소 필요 피로도"는 항상 "소모 피로도"보다 크거나 같습니다.
        - "최소 필요 피로도"와 "소모 피로도"는 1 이상 1,000 이하인 자연수입니다.
        - 서로 다른 던전의 ["최소 필요 피로도", "소모 피로도"]가 서로 같을 수 있습니다.
*/
function 피로도(k, dungeons) {
    function findOptimalDungeons(k, dungeons, visited, visitedCount = 0) {
        let maxVisited = visitedCount;
        for (let i = 0; i < dungeons.length; i++) {
            if (visited[i])
                continue; // 이미 방문한 던전은 건너뜀
            const [requiredK, consumeK] = dungeons[i];
            if (k >= requiredK) { // 던전 방문 가능
                visited[i] = true; // 방문 표시
                maxVisited = Math.max(maxVisited, findOptimalDungeons(k - consumeK, dungeons, visited, visitedCount + 1));
                visited[i] = false; // 백트래킹 (다른 경로 탐색을 위해 방문 취소)
            }
        }
        return maxVisited;
    }
    return findOptimalDungeons(k, dungeons, new Array(dungeons.length).fill(false));
}
// '앞자리 숫자가 가장 큰거의 뒷자리를 뺏을때 값'이 '앞자리 수들보다 큰 갯수'가 많은 순서.
// 1. 80 => 3
// 2. 60 => 2  / 40 => 1 / 70 => 1
// k-dungeons[i][1] >= dungeons[i][0] 갯수
// console.log(maxDungeonVisits(80, [[80, 20], [50, 40], [30, 10]])); // 3
// console.log(maxDungeonVisits(78, [[78, 18], [70, 11], [67, 9], [60, 8], [59, 2], [57, 54]])); // 4
// console.log(maxDungeonVisits(10, [[10, 10], [10, 10], [10, 10]])); // 1
// console.log(maxDungeonVisits(5, [[3, 2], [2, 2], [2, 1]])); // 3
console.log(피로도(4, [[4, 3], [2, 2], [2, 2]])); // 2
// 78 - 70/11 = 67
// 	- 60/8 =59
// 	- 59/2 = 57
// 	- 57/54 = 0
//# sourceMappingURL=83%ED%94%BC%EB%A1%9C%EB%8F%84.js.map