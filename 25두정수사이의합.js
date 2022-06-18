function solution(a, b) {
    var answer = 0;
    if(a<b){
        for(let i=a; i<b; i++){
            answer+=i;
        }
        answer+=b;
    }else if(a>b){
        for(let i=b; i<a; i++){
            answer+=i;
        }
        answer+=a;
    }else{
        answer+=a;
    }
    
    return answer;
}
let inputdata = ["sun", "bed", "car"];
let inputdata1 = 3;
let inputdata2 = 3;
solution(inputdata1, inputdata2);
