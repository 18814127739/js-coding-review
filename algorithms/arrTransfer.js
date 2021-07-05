/**
 * @description:
  	已知如下数组： arr
		请实现一个方法，以arr为入参， 返回如下数组
		[
		{ skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
		{ skill: 'html', user: ['Sue'], count: 1 },
		{ skill: 'css', user: ['Sue', 'Bill'], count: 2 },
		];
 */
const arr = [
	{ skill: 'javascript', user: 'Chad' },
	{ skill: 'javascript', user: 'Bill' },
	{ skill: 'javascript', user: 'Sue' },
	{ skill: 'html', user: 'Sue' },
	{ skill: 'css', user: 'Sue' },
	{ skill: 'css', user: 'Bill' },
];

function fn(arr) {
	// 遍历两次
	// const map = new Map();
	// arr.forEach(c => {
	// 	if(map.has(c.skill)) {
	// 		const v = map.get(c.skill);
	// 		v.user.push(c.user);
	// 		v.count ++;
	// 		map.set(c.skill, v);
	// 	} else {
	// 		map.set(c.skill, { skill: c.skill, user: [c.user], count: 1 });
	// 	}
	// });
	// return [...map.values()];

	// 遍历一次
	const [map, newArr] = [{}, []];
	arr.forEach(c => {
		if (typeof map[c.skill] === 'number') {
			newArr[map[c.skill]].user.push(c.user);
			newArr[map[c.skill]].count++;
		} else {
			map[c.skill] = newArr.length;
			newArr.push({
				skill: c.skill,
				user: [c.user],
				count: 1
			});
		}
	});
	return newArr;
}

console.log(fn(arr));
