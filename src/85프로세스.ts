
/*
	'프로세스'-스택/큐

	- 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
		1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
		2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
		3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
			3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

	- 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고
	- 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

	- 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와
	- 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location

	[제한사항]
		- priorities의 길이는 1 이상 100 이하입니다.
		- priorities의 원소는 1 이상 9 이하의 정수입니다.
		- priorities의 원소는 우선순위를 나타내며 숫자가 클 수록 우선순위가 높습니다.
		- location은 0 이상 (대기 큐에 있는 프로세스 수 - 1) 이하의 값을 가집니다.
		- priorities의 가장 앞에 있으면 0, 두 번째에 있으면 1 … 과 같이 표현합니다.

*/

function 프로세스(priorities:number[], location:number) {
	// 각 프로세스를 [우선순위, 원래 인덱스] 형태의 튜플로 저장합니다.
  const queue: [number, number][] = priorities.map((priority, index) => [priority, index]);

  let executionOrder = 0;

  // 큐에 프로세스가 남아있는 동안 반복합니다.
  while (queue.length) {
    // 맨 앞 프로세스를 꺼냅니다.
    const current = queue.shift()!;

    // 큐에 있는 프로세스 중 우선순위가 더 높은 프로세스가 있는지 확인합니다.
    if (queue.some(([p]) => p > current[0])) {
      // 더 높은 우선순위의 프로세스가 있다면, 현재 프로세스를 다시 큐의 맨 뒤로 보냅니다.
      queue.push(current);
    } else {
      // 그렇지 않다면, 현재 프로세스를 실행합니다.
      executionOrder++;
      // 만약 현재 실행한 프로세스가 궁금했던 프로세스라면, 실행 순서를 반환합니다.
      if (current[1] === location) {
        return executionOrder;
      }
    }
  }

  // 모든 프로세스를 처리한 후 실행 순서를 반환합니다.
  return executionOrder;
};

// console.log(프로세스([2, 1, 3, 2], 2)); // 1
console.log(프로세스([1, 1, 9, 1, 1, 1], 0)); // 5
// console.log(프로세스([2, 3, 1, 2], 3)); // 2



/*
	📌 CheckPoint! 우선순위에서 밀리면 뒤로 보낸다!

	[풀이]

	초기 상태: (1,0),(1,1),(9,2),(1,3),(1,4),(1,5)
		(각 요소는 우선순위,원래인덱스 형태입니다.)

	첫 번째 순환:
		맨 앞의 (1,0)을 확인합니다.
		큐 안에 (9,2)와 같이 1보다 높은 우선순위가 있으므로 (1,0)은 뒤로 이동합니다.
		큐 상태: (1,1),(9,2),(1,3),(1,4),(1,5),(1,0)

	두 번째 순환:
		맨 앞의 (1,1)을 확인합니다.
		여전히 큐에 (9,2)가 있으므로 (1,1)도 뒤로 이동합니다.
		큐 상태: (9,2),(1,3),(1,4),(1,5),(1,0),(1,1)

	세 번째 순환:
		맨 앞의 (9,2)를 확인합니다.
		큐에 9보다 높은 우선순위가 없으므로 (9,2)를 실행합니다. (실행 순서: 1번째)
		큐 상태: (1,3),(1,4),(1,5),(1,0),(1,1)

	이후 순환:
		남은 모든 프로세스의 우선순위는 모두 1이므로, 큐에 있는 순서대로 실행됩니다.
		(1,3): 2번째 실행
		(1,4): 3번째 실행
		(1,5): 4번째 실행
		(1,0): 5번째 실행 (여기가 location = 0에 해당합니다)
		(1,1): 6번째 실행

	따라서 location = 0인 프로세스는 5번째로 실행되어, 답은 5가 됩니다.

*/

