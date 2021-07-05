/**
 * @description: 采购方案
 * 小力将 N 个零件的报价存于数组 arr。小力预算为 target，假定小力仅购买两个零件，要求购买零件的花费不超过预算，请问他有多少种采购方案。
 * 注意：答案需要以 1e9 + 7 (1000000007) 为底取模，如：计算初始结果为：1000000008，
 */

function purchasePlans(arr, target) {
	let ans = 0;
	let i = 0;
	let j = arr.length - 1;
	// 先对数组进行排序
	arr.sort((a, b) => a - b);
	while (i < j) {
		if (arr[i] + arr[j] > target) {
			// 如果最小值 + 最大值 > 预算， 则最大值索引 - 1
			j--;
		} else {
			// 如果当前arr[i] + arr[j] < target， 则 arr[i] + arr[j-1] 至 arr[i] + arr[i+1] 肯定都少于target， 所以有 j - i 种方案
			ans += j - i;
			i++;
		}
	}
	return ans % 1000000007;
}
