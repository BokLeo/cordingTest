let arr = [1,2,3,4,5];
delete arr[0];



console.log(arr);

for(const i in arr){
	delete arr[i];
}

console.log('arr2 : ', arr);

for(const i in arr){
	console.log('??? ; ', i);
	console.log(arr[i]);
}

// console.log([...new Set(arr)]);