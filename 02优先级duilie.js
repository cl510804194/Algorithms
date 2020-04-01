function PriorityQueue() {
  // 在priorityQueue创新创建一个类：可以理解成内部类
  function QueueElement(e, p) {
    this.element = e;
    this.priority = priority;
  }
  this.items = [];
  PriorityQueue.prototype.enqueue = function(e, p) {
    //   1.创建queueElement对象
    const queueElement = new QueueElement(e, p);
    // 2.判断队列是否为空
    if (this.items.length == 0) {
      this.items.push(queueElement);
    } else {
      const added = false;
      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  };
}
const pq = new PriorityQueue();
