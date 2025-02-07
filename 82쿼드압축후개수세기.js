"use strict";
/*
    '쿼드 압축 후 개수 세기'
    [문제 설명]
    0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.

    당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
    만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
    그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
    arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

    [제한사항]
    arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
    arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
    arr의 각 행에 있는 모든 값은 0 또는 1 입니다.
 */
function 쿼드압축(arr) {
    // ✅ 특정 영역이 전부 같은 숫자인지 검사하는 함수
    const isUniform = (matrix) => {
        const firstValue = matrix[0][0];
        return matrix.every(row => row.every(cell => cell === firstValue));
    };
    // ✅ 행렬을 4분할하여 쿼드트리 형태로 변환
    const splitMatrixRecursive = (matrix) => {
        const size = matrix.length;
        // **기저 조건(Base Case):** 크기가 1x1이거나, 모든 값이 같다면 숫자로 반환
        if (size === 1 || isUniform(matrix))
            return matrix[0][0];
        const half = size / 2;
        let topLeft = matrix.slice(0, half).map(row => row.slice(0, half));
        let topRight = matrix.slice(0, half).map(row => row.slice(half));
        let bottomLeft = matrix.slice(half).map(row => row.slice(0, half));
        let bottomRight = matrix.slice(half).map(row => row.slice(half));
        return [
            splitMatrixRecursive(topLeft),
            splitMatrixRecursive(topRight),
            splitMatrixRecursive(bottomLeft),
            splitMatrixRecursive(bottomRight)
        ];
    };
    // ✅ 최종 압축된 결과에서 0과 1의 개수를 세는 함수
    const countCompressedValues = (matrix) => {
        console.log(matrix);
        // **기저 조건(Base Case):** 숫자 하나만 남아 있다면 해당 숫자의 개수 증가
        if (typeof matrix === "number") {
            return matrix === 0 ? [1, 0] : [0, 1];
        }
        // **재귀적으로 탐색하여 개수 합산**
        let countZero = 0;
        let countOne = 0;
        for (const part of matrix) {
            const [zero, one] = countCompressedValues(part);
            countZero += zero;
            countOne += one;
        }
        return [countZero, countOne];
    };
    return countCompressedValues(splitMatrixRecursive(arr));
}
// ✅ 테스트 실행
// console.log(쿼드압축([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]])); // ⬅ 예상 출력: [4, 9]
console.log(쿼드압축([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]])); //	[10,15]
//# sourceMappingURL=82%EC%BF%BC%EB%93%9C%EC%95%95%EC%B6%95%ED%9B%84%EA%B0%9C%EC%88%98%EC%84%B8%EA%B8%B0.js.map