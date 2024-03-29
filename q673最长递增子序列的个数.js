/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。

 示例 1:

 输入: [1,3,5,4,7]
 输出: 2
 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 示例 2:

 输入: [2,2,2,2,2]
 输出: 5
 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findNumberOfLIS = function(nums) {
    let max = 0, ans = 0;
    const length = nums.length;
    const dp = new Array(length).fill(1), count = new Array(length).fill(1);
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j]
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
            }
        }
        if (dp[i] > max) {
            max = dp[i];
            ans = count[i];
        } else if (dp[i] === max) {
            ans += count[i];
        }
    }
    return ans;
}
findNumberOfLIS(
    [2,2,2,2,2])