"use strict";
function test(arr) {
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
console.log(test([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]])); // ⬅ 예상 출력: [4, 9]
//# sourceMappingURL=check.js.map