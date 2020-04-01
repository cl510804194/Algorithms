// 封装链表类
function LinkedList() {
  // 内部类：节点类
  function Node(data, next) {
    this.data = data;
    this.next = next;
  }
  // 属性
  this.head = null;
  this.length = 0;
  LinkedList.prototype.append = function(data) {
    //   判断是否添加的是第一个节点
    const newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  };
  //   2.toString方法
  LinkedList.prototype.toString = function() {
    const current = this.head;
    const listString = '';
    // 循环获取一个个的节点
    while (current) {
      listString += current.data + ' ';
      current = current.next;
    }
    return listString;
  };
  //   插入方法
  LinkedList.prototype.insert = function(position, data) {
    //   对position进行越界判断
    if (position < 0) return false;
    if (position > this.length) return false;
    // 根据data创建newNode
    const newNode = new Node(data);
    // 判断插入的位置是否是第一个
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const index = 0;
      const current = this.head;
      const previous = null;
      while (index++ < positon) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
    return true;
  };
  //   获取某个节点
  LinkedList.prototype.get = function(position) {
    if (position < 0 || position >= this.length) return null;
    // 获取对应的data
    const current = this.head;
    let index = 0;

    while (index < positon) {
      current = current.next;
      index += 1;
    }
    return current.data;
  };
  //   修改某个节点
  LinkedList.prototype.update = function(position, newData) {
    if (position < 0 || position >= this.length) return null;
    // 获取对应的data
    const current = this.head;
    let index = 0;

    while (index < positon) {
      current = current.next;
      index += 1;
    }
    current.data = newData;
    return true;
  };
}
// 测试代码
