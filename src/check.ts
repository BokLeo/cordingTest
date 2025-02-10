function maxDungeonVisits(k: number, dungeons: number[][]): number {
	function findOptimalDungeons(k: number, dungeons: number[][], visited: boolean[], visitedCount: number = 0): number {
			let maxVisited = visitedCount;
			console.log('maxVisited : ' + maxVisited, 'visited : ' + visited);

			for (let i = 0; i < dungeons.length; i++) {
					if (visited[i]) continue; // 이미 방문한 던전은 건너뜀

					const [requiredK, consumeK] = dungeons[i];

					console.log(' requiredK ' + requiredK);
					console.log(' k ' + k);

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

// ✅ 테스트 케이스
// console.log(maxDungeonVisits(80, [[80, 20], [50, 40], [30, 10]])); // 3
// console.log(maxDungeonVisits(78, [[78, 18], [70, 11], [67, 9], [60, 8], [59, 2], [57, 54]])); // 4
// console.log(maxDungeonVisits(10, [[10, 10], [10, 10], [10, 10]])); // 1
// console.log(maxDungeonVisits(5, [[3, 2], [2, 2], [2, 1]])); // 3
console.log(maxDungeonVisits(4, [[4,3],[2,2],[2,2]])); // 2
