let arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (arr2[j] && arr2[j][i] !== undefined) {
            console.debug(`i는 ${i} / j는 ${j} / arr2[j][i] : ${arr2[j][i]}`);
        } else {
            console.error(`Invalid access: i=${i}, j=${j}`);
        }
    }
}
