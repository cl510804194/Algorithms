class BinarySearchTree {
  public root: any;
  constructor() {
    this.root = null;
  }
  public insert(key: number) {
    const newNode = new Nod(key);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  public insertNode(node: Nod, newNode: Nod) {
    if (newNode.key < node.key) {
      //   向左查找
      if (node.left == null) {
        node.left = newNode;
      } else {
        //   递归插入左边的值
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
      //   向右查找;
    }
  }
  //   先序遍历
  public preOrderTraversal(handler: any) {
    this.preOrderTraversalNode(this.root, handler);
  }
  //   根据节点
  public preOrderTraversalNode(root: Nod, handler: any) {
    if (root != null) {
      handler(root.key);
      this.preOrderTraversalNode(root.left, handler);
      //   处理经过节点的右子节点
      this.preOrderTraversalNode(root.right, handler);
    }
  }
  public postOrderTraversal(handler: any) {
    this.postOrderTraversalNode(this.root, handler);
  }
  public postOrderTraversalNode(root: Nod, handler: any) {
    if (root != null) {
      this.preOrderTraversalNode(root.left, handler);
      //   处理经过节点的右子节点
      this.preOrderTraversalNode(root.right, handler);
      handler(root.key);
    }
  }
  public max() {
    let node = this.root;
    let key = null;
    // 依次向右不断查找
    while (node != null) {
      key = node.key;
      node = node.right;
    }
    return key;
  }
  public min() {
    let node = this.root;
    let key = null;
    // 依次向右不断查找
    while (node != null) {
      key = node.key;
      node = node.left;
    }
    return key;
  }
  // 搜索某一key
  public search(key) {
    // 1.获取根节点
    let node = this.root;
    // 2.循环搜索key
    while (node != null) {
      if (node.key < key) {
        node = node.left;
      } else if (node.key > key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  }
  public remove(key) {
    // 寻找要删除的节点
    // 定义变量，保存一些信息
    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    // 开始寻找删除的节点
    while (current.key != key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      // 某种情况：已经找到了最后的节点，依然没有找到
      if (current == null) {
        return false;
      }
    }

    // 根据对应的情况删除节点
    // 删除的节点是叶子节点
    if (current.left && current.right == null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // 删除的是有一个子节点
    else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left;
      }
      if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.left = current.right;
      }
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      }
      if (isLeftChild) {
        parent.right = current.left;
      } else {
        parent.right = current.right;
      }
    }
    // 删除的节点有两个子节点
    else {
      const successor = this.getSucceesor(current);
      //  判断是不是根节点
      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      // 将删除节点的左子树=current.left
      successor.left = current.left;
    }
    // 找到了current.key==key
  }
  public getSucceesor(delNode) {
    let successor = delNode;
    const current = delNode.right;
    let succeessorParent = delNode;
    while (current != null) {
      succeessorParent = successor;
      successor = current.left;
    }
    if (successor != delNode.right) {
      succeessorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }
}
class Nod {
  public left: Nod;
  public right: Nod;
  public key: number;
  //   public value: string;
  constructor(key: number, left?: Nod, right?: Nod) {
    this.left = null;
    this.right = null;
    this.key = key;
    // this.value = value;
  }
}
// 创建BinarySearchTree
const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
bst.preOrderTraversal((key: any) => {
  console.log(key);
});
console.log(bst.search(24));
