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
    
    return console.log(answer);
}

let inputdata = 8;

let inputdata1 = [3,4,5];
let inputdata2 = 2;
solution(inputdata);


