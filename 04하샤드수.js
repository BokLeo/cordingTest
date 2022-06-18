function solution(s) {
    var answer = '';
    if(s<1 || s>10000) answer = "값이 옳지 않습니다"; 

    let arr = s.toString().split("");    

    if(arr.length<2){
        console.log("true"); arr[1] = arr[0]; arr[0] = '0';
    }
        
    let totalN = 0;
    for(let i=0; i<arr.length; i++){
        totalN += parseInt(arr[i]);
    }    

    if(s%totalN == 0){
        return true;
    }else{
        return false;
    }
}

let inputData = "13";

solution(inputData);