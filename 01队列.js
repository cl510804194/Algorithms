function Queue() {
  // 属性
  this.items = [];
  // 方法
  //   1.将元素加入到队列中
  Queue.prototype.enqueue = function(e) {
    this.items.push(e);
  };
  //   从队列中删除并返回前端元素
  Queue.prototype.dequeue = function() {
    return this.items.shift();
  };
  //   查看前端元素
  Queue.prototype.front = function() {
    return this.items[0];
  };
  //   查看队列是否为空
  Queue.prototype.isEmpty = function() {
    return this.items.length == 0;
  };
  //   查看队列中元素的个数
  Queue.prototype.size = function() {
    return this.items.length;
  };
  //   返回字符串形式
  Queue.prototype.toString = function() {
    return this.items.join('');
  };
}
// 面试题：击鼓传花
function passGame(nameList, num) {
  // 1.创建一个队列结构
  const queue = new Queue();
  //   2.将所有人一次加入到队列中
  nameList.forEach(item => {
    // console.log(item);
    queue.enqueue(item);
  });
  while (queue.size() > 1) {
    for (var i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
  }
  //   开始数数字，不是num的时候，重新加入到队列的末尾
  //   是num这个数字的时候，将其从队列中删除
  //   num数字之前的人重新放入末尾
  queue.dequeue();
  //   获取剩下的那个人
  const endName = queue.front();
  console.log(endName);
  return nameList.indexOf(endName);
}
passGame([1, 2, 3, 4, 5, 6, 43, 25, 62], 3);
