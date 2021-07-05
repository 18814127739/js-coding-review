/**
 * @description: 找出两个有序数组中相同数的集合
 */
function findEqualNum(arr1, arr2) {
	let i = 0;
	let j = 0;
	const res = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] === arr2[j]) {
			res.push(arr1[i])
			i++;
			j++;
		} else if (arr1[i] < arr2[j]) {
			i++;
		} else {
			j++
		}
	}
	return res;
}

/**
 * @description: 找出两个数组中相同数的集合(非有序)
 */
function findEqualNum2(arr1, arr2) {
	const res = [];
	const obj = {};
	arr1.forEach(c => {
		obj[c] = true;
	});
	arr2.forEach(c => {
		if (obj[c]) {
			arr.push(c);
		}
	});
	return res;
}

// test
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 3, 4, 5, 6, 7, 8];

const res = findEqualNum(arr1, arr2);
console.log(res);
