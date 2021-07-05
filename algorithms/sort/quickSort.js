/**
 * @description: 快速排序 O(nlogn)
 */

import data from './testData.js';
import {
	swap
} from '../../utils.js';

// 实现1: 简洁，但时每次递归都需要创建2个新数组， 控件复杂度较大
function quickSort1(arr) {
	if (arr.length > 1) { // 数组长度为1时终止递归
		const mid = Math.floor(arr.length / 2);
		const midValue = arr.splice(mid, 1)[0];
		const left = [];
		const right = [];
		arr.forEach(c => {
			if (c <= midValue) {
				left.push(c);
			} else {
				right.push(c);
			}
		});
		return [...quickSort1(left), midValue, ...quickSort1(right)];
	}
	return arr;
}

// 实现2: 相对复杂，但不需要额外的存储空间，直接在原数组上通过交互位置进行排序
function quickSort2(arr) {
	return quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
	if (arr.length > 1) {
		const index = partition(arr, left, right);
		if (left < index - 1) {
			quick(arr, left, index - 1);
		}
		if (index < right) {
			quick(arr, index, right);
		}
	}
	return arr;
}

// 划分过程
function partition(arr, left, right) {
	// 选择中间的值作为主元
	const midValue = arr[Math.floor((left + right) / 2)];
	let [i, j] = [left, right];
	while (i <= j) {
		while (arr[i] < midValue) {
			i++;
		}
		while (arr[j] > midValue) {
			j--;
		}
		if (i <= j) {
			swap(arr, i, j); // 交互
			i++;
			j--;
		}
	}
	return i;
}

/**
 * @description: test
 */
// console.log(quickSort1(data));
quickSort2(data);
console.log(data);

export default quickSort2;
