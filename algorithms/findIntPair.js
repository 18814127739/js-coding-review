/**
 * @description: 找出数组中所有和为sum的整数对
 * 方法1：
 * 先将整型数组排序，排序之后定义两个指针left和right。
 * left指向已排序数组中的第一个元素，right指向已排序数组中的最后一个元素
 * 将 arr[left]+arr[right]与 给定的元素比较，若前者大，right--；
 * 若前者小，left++；若相等，则找到了一对整数之和为指定值的元素。
 * 此方法采用了排序，排序的时间复杂度为O(NlogN)
 * 排序之后扫描整个数组求和比较的时间复杂度为O(N)。故总的时间复杂度为O(NlogN)。空间复杂度为O(1)
 * 方法2：
 * 依次遍历整型数组，对整型数组中的每一个元素
 * 求解它的suplement（expectedSum-arr[i]）.suplement就是指定的值减去该数组元素。
 * 如果该元素的 suplement不在HashSet中，则将该元素添加到HashSet。
 * 如果该元素的suplement在HashSet中，说明已经找到了一对整数之和为指定值的元素。
 * 该方法使用了HashSet，故空间复杂度为O(N)，由于只需要扫描一遍整型数组，故时间复杂度为O(N)
 */
function findIntPair(arr, sum) {
	const obj = {};
	const res = [];
	arr.forEach(c => {
		const n = sum - c;
		if (obj[c]) {
			res.push([n, c]);
		} else {
			obj[n] = true;
		}
	});
	return res;
}

const data = [3, 6, 0, 4, 7, 5, 1, 2, 8, 11];

const pair = findIntPair(data, 10);
console.log(pair);
