function solution(scores) {
    var answer = 0;

    let arr = new Array();
    for(let i = 0; i<scores.length; i++){
        arr.push(scores[i].split(''));
    }

    let result = new Array(scores.length).fill("미정");

    for(let i = 0; i<scores.length; i++){
        let fCount = 0;
        let aCount = 0;
        for(let j=0; j<arr[i].length; j++){
            arr[i][j]=="F" ? ++fCount : false;
            arr[i][j]=="A" ? ++aCount : false;
            fCount>1 ? 
                result[i] = ("불합격") : 
            (fCount<2 && aCount>1) ?
                result[i] = ("합격") : 
                result[i] = ("미정")
                arr[i][j] == "A" ? arr[i][j] = 5 : 
                arr[i][j] == "B" ? arr[i][j] = 4 :
                arr[i][j] == "C" ? arr[i][j] = 3 :
                arr[i][j] == "D" ? arr[i][j] = 2 :
                arr[i][j] == "E" ? arr[i][j] = 1 :
                arr[i][j] == "F" ? arr[i][j] = 0 : false;
            ;
        }
    }

    for(let i=0; i<arr.length; i++){
        if(result[i].includes("합격") || result[i].includes("불합격")){

        }else{
            const reducer = (accumulator, curr) => accumulator + curr;
            let sum = arr[i].reduce(reducer);
            let max = Math.max(...arr[i]);
            let min = Math.min(...arr[i]);
            let score = (sum-max-min)/(arr[i].length-2);
            score>=3 ? result[i]="합격" : result[i]="불합격";
        }
    } 
    
    return result.filter(element => '합격' === element).length;
}


let inputData = ["BCD","ABB","FEE"];
solution(inputData);

