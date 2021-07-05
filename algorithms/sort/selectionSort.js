/**
 * @description: 选择排序  O(n2)
 * 找到数据结构中最小值并放置到第一位，接着找第二小的值并放到第二位，以此类推
 */

import data from './testData.js';

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				// 更新最小值的索引
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
}

selectionSort(data);
console.log(data);
