function DoublyLinkList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  //   内部类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  //   追加方法
  DoublyLinkList.prototype.append = function(data) {
    //   1.创建新节点
    // 判断是否添加的是第一个节点
    const newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 找到最后一个节点
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  };
  //   将链表转成字符串形式
  //   2.toString方法
  DoublyLinkList.prototype.toString = function() {
    return this.backwardString();
  };
  //   forwardString方法
  DoublyLinkList.prototype.forwardString = function() {
    let current = this.tail;
    let resultString = '';
    while (current) {
      resultString += current.data + '';
      current = current.prev;
    }
    return resultString;
  };
  //   backwardString方法
  DoublyLinkList.prototype.backwardString = function() {
    let current = this.head;
    let resultString = '';
    // 2.依次向后遍历，获取每一个节点
    while (current) {
      resultString += current.data;
      current = current.next;
    }
    return resultString;
  };
  //   insert方法
  DoublyLinkList.prototype.insert = function(position, data) {
    if (position < 0 || position > this.length) return;
    // 根据data创建新的节点
    const newNode = new Node(data);
    //判断原来的猎鸟是否为空
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 3.1判断position是否为0
      if (position == 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position == this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        const current = this.head;
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        // 修改指针
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
  };
}
const test = new DoublyLinkList();
test.append('ABC');
test.append('AdBC');
test.append('ABSC');
console.log(test.backwardString());
console.log(test.forwardString());
