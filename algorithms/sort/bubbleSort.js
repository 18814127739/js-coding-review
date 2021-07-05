/**
 * @description: 冒泡排序  O(n2)
 * 比较所有相邻的两个项， 如果第一个比第二个大， 则交互位置。
 * 第一轮大循环后最大值会在最后， 第二轮大循环后第二大的值会在倒数第二的位置，以此类推
 */

import data from './testData.js';

function bubbleSort(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			// 内循环减去外循环中已跑过的轮数，避免不必要的比较
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

bubbleSort(data);
console.log(data);
