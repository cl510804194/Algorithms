class Stack {
  //栈的属性
  constructor() {
    this.items = [];
  }

  //栈的相关操作；
}
//   入栈
Stack.prototype.push = function(e) {
  this.items.push(e);
};
// 从栈中删除并取出元素
Stack.prototype.pop = function() {
  return this.items.pop();
};
//  查看一下栈顶元素
Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
};
// 判断是否为空
Stack.prototype.isEmpty = function() {
  return this.items.length == 0;
};
// 获取栈中元素的个数
Stack.prototype.size = function() {
  return this.items.length;
};
// 转化为string
Stack.prototype.toString = function() {
  return this.items.join('');
};
//栈的使用

function dec2bin(decNumber) {
  const stack = new Stack();
  while (decNumber > 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }
  let binaryString = '';
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  console.log(binaryString);
  return binaryString;
}
dec2bin(100);
