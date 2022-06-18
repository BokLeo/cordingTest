/*
// 문제설명
주 5일제인 회사의 직원이 휴가를 내고 n일간 여행을 가려한다.
이 때 여행 기간에 포함되는 휴일(토요일과 일요일)의 숫자는 무슨 요일부터 여행을 시작하는지에 따라 달라질 수 있다.

예를 들어 5일간 여행을 간다고 했을 때
1. 월요일부터 여행을 간다면 월-화-수-목-금-토로 휴일이 하루만 포함된다.
2. 화요일부터 여행을 간다면 화-수-목-금-토-일로 휴일이 이틀 포함된다.
3. 무슨 요일에 여행을 시작하더라도 휴일이 1보다 적게 포함되거나 2보다 많이 포함될 수는 없다.

여행을 가려는 기간 n일이 주어질때, 해당 기간중에 포함되는 휴일(토요일, 일요일)의 최솟값과 최댓값을 return 하도록 solution함수를 완성하라.
※ 토요일, 일요일 이외의 휴일은 없다고 가정.answer

입출력 예
n=6 -> [1,2]
n=7 -> [2,2]
*/
function solution(n){
    var answer = [];

    const week = parseInt(n/7)+1;
    if(n%7>0){

        if(n%7<7){
            if(n<2){
                answer = [0*week, 1*week];
            }else if(n<6){
                answer = [0*week, 2*week];
            }else{
                answer = [1, 2];
            }
        }else{
            answer = [2*week, 2*week];
        }
    }else{
        if(n<7){
            if(n<2){
                answer = [0, 1];
            }else if(n<6){
                answer = [0, 2];
            }else{
                answer = [1, 2];
            }
        }else{
            answer = [2, 2];
        }
    }
    
    return answer;
}