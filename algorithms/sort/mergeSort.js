/**
 * @description: 归并排序 O(nlogn)
 * 分而治之算法，将原始数组切分成较小的数组，直到每个小数组只有一个元素， 接着将小数组归并成较大的数组， 直到最后只有一个排序完毕的大数组
 * 排序发生在归并过程中
 */

import data from './testData.js';

function mergeSort(arr) {
	if (arr.length > 1) {
		const mid = Math.floor(arr.length / 2);
		const left = mergeSort(arr.slice(0, mid));
		const right = mergeSort(arr.slice(mid, arr.length));
		arr = merge(left, right);
	}
	return arr;
}

// 排序过程
function merge(left, right) {
	let i = 0;
	let j = 0;
	const result = [];
	while (i < left.length && j < right.length) {
		result.push(left[i] < right[j] ? left[i++] : right[j++]);
	}
	return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(mergeSort(data));
