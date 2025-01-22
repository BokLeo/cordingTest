function maxSum(arr, k) {
  let max = 0;
  let currentSum = 0;

  // 첫 윈도우 합 계산
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  max = currentSum;

  // 윈도우를 이동하며 합 계산
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    max = Math.max(max, currentSum);
  }

  return max;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSum(arr, k)); // 출력: 9