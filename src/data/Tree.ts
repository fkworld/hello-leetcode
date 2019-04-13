export interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

export const InitTreeNode = (val: number): TreeNode => {
    return {
        val: val,
        left: null,
        right: null
    }
}

export const trans_array_to_tree = (array: (number | null)[]): TreeNode => {
    let root: TreeNode = InitTreeNode(<number>array.shift())
    let line = [root]
    while (true) {
        if (line.length === 0) {
            break;
        }
        let next_line = []
        for (let node of line) {
            let x = array.shift()
            if (x != undefined) {
                node.left = InitTreeNode(x)
                next_line.push(node.left)
            }
            let y = array.shift()
            if (y != undefined) {
                node.right = InitTreeNode(y)
                next_line.push(node.right)
            }
        }
        line = next_line
    }
    return root
}