/**
 * @description: 二分搜索
 */

import quickSort from './sort/quickSort.js';

function binarySearch(arr, value) {
	const newArr = quickSort(arr);
	let low = 0;
	let high = newArr.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (arr[mid] < value) {
			low = mid + 1;
		} else if (arr[mid] > value) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

/**
 * @description: test
 */
const data = [5,6,4,3,1,2];
const index = binarySearch(data, 0);
console.log(index);
