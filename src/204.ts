/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (26.74%)
 * Total Accepted:    15.7K
 * Total Submissions: 57.9K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */
export { }

// 全局质数列表
let global_list = []
const f = (n: number) => {
    // 计算
    for (let i = 2; i < n; i += 1) {
        global_list.push(i)
    }
    // 厄拉多塞筛法
    for (let i = 0; i < global_list.length; i += 1) {
        let x = global_list[i]
        if (!x) {
            continue
        }
        for (let j = i + x; j < global_list.length; j += x) {
            global_list.splice(j, 1, null)
        }
    }
    global_list = global_list.filter(value => !!value)
}
f(1500000)

const countPrimes = (n: number): number => {
    // 思路:使用厄拉多塞筛法计算,然后通过缓存获取
    // 从缓存中获取
    if (n < global_list[global_list.length - 1]) {
        for (let i = 0; i < global_list.length; i += 1) {
            if (global_list[i] >= n) {
                return i
            }
        }
    } else {
        return global_list.length
    }
};

// ??这也太鸡儿假了吧
const countPrimes_2 = (n: number): number => {
    let notPrimes = new Uint8Array(n);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrimes[i]) {
            count++;
            let a = n / i;
            for (let j = i; j < a; j++) {
                notPrimes[i * j] = 1;
            }
        }
    }
    return count;
};

// test
console.log(countPrimes_2(10))
