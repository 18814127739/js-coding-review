/**
 * @description: 最少硬币找零,贪心算法， 大部分情况下能得到最优解
 * @param {*} coins  硬币面额数组， 递增有序数组
 * @param {*} amount  零钱大小
 * @return {*}
 */
function minCoinChange(coins, amount) {
	const change = [];
	let total = 0;
	for (let i = coins.length - 1; i >= 0; i--) {
		const coin = coins[i];
		while (total + coin <= amount) {
			total += coin;
			change.push(coin);
		}
	}
	return change;
}

console.log(minCoinChange([1, 5, 10, 25], 36)); // [25, 10, 1] 最优解
console.log(minCoinChange([1, 3, 4], 6)); // [4, 1, 1] 非最优解， 最优解为 [3, 3]
