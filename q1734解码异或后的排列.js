/**
 * @param {number[]} encoded
 * @return {number[]}
 *
 * 你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。

 它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。

 给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。

  

 示例 1：

 输入：encoded = [3,1]
 输出：[1,2,3]
 解释：如果 perm = [1,2,3] ，那么 encoded = [1 XOR 2,2 XOR 3] = [3,1]
 示例 2：

 输入：encoded = [6,5,4,6]
 输出：[2,4,1,5,3]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/decode-xored-permutation
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var decode = function(encoded) {
  let n = encoded.length + 1, res = [];
  let all = 1;
  for (let i = 2; i <= n; i++) {
    all ^= i;
  }
  let excludeA = encoded[1];
  for (let i = 3; i < n - 1; i += 2) {
    excludeA ^= encoded[i];
  }
  let pre = excludeA ^ all;
  res.push(pre);
  for (let i = 0; i < n - 1; i++) {
    pre = encoded[i] ^ pre;
    res.push(pre);
  }
  return res;
};
decode([3,1]);
