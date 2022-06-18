function solution(prices) {
    let index = prices.indexOf(Math.min(...prices));
    const arr = prices.splice(index+1);

    return arr.length ? console.log(Math.max(...arr)-Math.min(...prices)) : console.log(0);
}
/*
주어진 값은
날짜별 차량 금액이다
3->1일차 3원
2->2일차 2원
4->3일차 4원
8->4일차 8원
7->5일차 7원

사고팔아 이익을 볼때 가장 최대 이익을 구하시오.
단, 이익이 발생하지 않을 때는 중고차를 구매하지 않아, 0을 return 합니다.
*/

let inputdata = [3,2,4,8,7];
let inputdata1 = [3,4,5];
let inputdata2 = 2;
solution(inputdata);
