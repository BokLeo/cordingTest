function solution(price, money, count) {
    let sum = 0;
    let pr = function(price, count){
        for(let i=1; i<=count; i++){
            sum += price*i;
        }
        return sum;
    }
    
    const makeMoney = money-pr(price,count);
     
    return makeMoney<0 ? makeMoney*-1 : 0;;
}


let price = 3;
let money = 20;
let count = 4;
solution(price, money, count);