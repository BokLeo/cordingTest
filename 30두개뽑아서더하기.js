function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    let t = [...new Set(answer)];
    
    return t.sort((a,b)=>{return a-b});
}

let inputdata = [5,0,2,7];
solution(inputdata);
