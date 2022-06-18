function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let sum = 0;
    arr.forEach(element => {
        numbers.includes(element) ? false : sum += element
    });
    return sum;
}

let inputdata = [1,2,3,4,6,7,8,0];
solution(inputdata);