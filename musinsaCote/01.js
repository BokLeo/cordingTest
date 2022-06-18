function solution(s) {
    let str = s.split('');
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let count = new Array(26).fill(0);
    
    str.forEach(i => count[alpha.indexOf(i)]++);

    let result = 0;
    for(let i=0; i<count.length; i++){
        count[i]%2 == 1 ? result++ : false;
    }

    return result;
}



let inputData = "abebeaedeac";
solution(inputData);

