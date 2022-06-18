function solution(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let z=j+1; z<nums.length; z++){
                arr.push(nums[i]+nums[j]+nums[z]);
            }
        }
    }

    const isPrime = (n) =>{
        for(let i=2; i<n; i++){
            if(n%i===0){
                return false;
            }
        }
        return true;
    }

    let result = [];
    arr.forEach((n)=>{
        isPrime(n) ? result.push(n) : false;
    })

    return result.length;
}

let inputdata = [1,2,3,4];
solution(inputdata);
