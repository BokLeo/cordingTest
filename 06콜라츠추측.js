function solution(s) {
    var answer = 0;

    while(s != 1 && answer<501){
        s%2==0 ? s=s/2 : s=s*3+1;
        ++answer;
    }
    return s==1 ? answer : -1;
}

let inputData = 626331;
solution(inputData);