/**
 * 69. x的平方根
 * - https://leetcode-cn.com/problems/sqrtx/
 * - 实现 int sqrt(int x) 函数。
 * - 计算并返回 x 的平方根，其中 x 是非负整数。
 * - 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 */
export { }

const mySqrt = (x: number): number => {
    let min = 0
    let max = x
    // 遍历（其实是while遍历，但是考虑死循环容错使用for遍历，与i的值无关）
    for (let i = 0; i < max; i += 1) {
        if (min === max) { break }
        let t = Math.trunc((min + max) / 2)
        let v_min = t * t
        let v_max = v_min + t * 2 + 1
        if (v_min === x) { return t }
        if (v_max === x) { return t + 1 }
        if (v_min < x && v_max > x) { return t }
        if (v_min > x) { max = t; continue }
        if (v_max < x) { min = t; continue }
    }
    return min
};

// test
console.log(mySqrt(8))