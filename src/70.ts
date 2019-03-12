/**
 * 70. 爬楼梯
 */

export { }

const climbStairs = (n: number): number => {
    // 可以使用递归，f(k) = f(k-1)+f(k-2)
    let list = [1, 1]
    for (let i = 2; i <= n; i += 1) {
        list[i] = list[i - 1] + list[i - 2]
    }
    return list[n]
};

// test

console.log(climbStairs(45))