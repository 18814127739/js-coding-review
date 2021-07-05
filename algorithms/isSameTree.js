/**
 * @description: 判断相同的树
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */
var isSameTree = function (p, q) {
	let flag = true;
	checkIsSame(p, q, () => {
		flag = false;
	});
	return flag;
};

function checkIsSame(pNode, qNode, callback) {
	if (
		(pNode && !qNode) || (!pNode && qNode) || (qNode && pNode && qNode.val !== pNode.val)
	) {
		callback();
		return;
	}
	if (!pNode && !qNode) {
		return;
	}
	checkIsSame(pNode.left, qNode.left, callback);
	checkIsSame(pNode.right, qNode.right, callback);
}

// test
const p = {
	val: 1,
	left: {
		val: 2,
		left: null,
		rigth: null,
	},
	right: {
		val: 1,
		left: null,
		right: null,
	},
}
const q = {
	val: 1,
	left: {
		val: 1,
		left: null,
		rigth: null,
	},
	right: {
		val: 2,
		left: null,
		right: null,
	},
}
console.log(isSameTree(p, q)); // false
