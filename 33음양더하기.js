function solution(absolutes, signs) {
    let arr = [];
    signs.filter((sign, index) => {
        if(sign==true) arr.push(absolutes[index]);
        if(sign==false) arr.push(absolutes[index]*-1);
    });
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

let inputdata1 = [4,7,12];
let inputdata2 = [true,false,true];
solution(inputdata1, inputdata2);