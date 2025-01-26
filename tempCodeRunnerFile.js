"use strict";
for (let i = 0; i < arr1.length; i++) {
    let newArr = [];
    for (let j = 0; j < arr2.length; j++) {
        let num = 0;
        for (let k = 0; k < leng; k++) {
            num += arr1[i][k] * arr2[k][j];
        }
        newArr.push(num);
    }
    result.push(newArr);
}
return result;
//# sourceMappingURL=tempCodeRunnerFile.js.map