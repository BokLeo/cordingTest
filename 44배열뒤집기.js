function solution(num_list) {
	let reverse_num_list = [];
	let cnt = num_list.length - 1;
	
	for(let i=cnt; i>=0; i--){
		reverse_num_list.push(num_list[i]);
	}
	
	return reverse_num_list;
}

solution([1, 2, 3, 4, 5]);

// num_list	result
// [1, 2, 3, 4, 5]	[5, 4, 3, 2, 1]
// [1, 1, 1, 1, 1, 2]	[2, 1, 1, 1, 1, 1]
// [1, 0, 1, 1, 1, 3, 5]	[5, 3, 1, 1, 1, 0, 1]



// 그냥 reverse() 하면됨..