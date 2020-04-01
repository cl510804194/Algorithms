function ListNode(val) {
  this.val = val;
  this.next = null;
  this.min = () => {
    let min = this.val;
    console.log(min);
    let node = this.next;
    console.log(node);
    node = node.next;
    console.log(node);
    while (node !== null) {
      if (min > node.val) {
        min = node.val;
      }
      if (node == null) {
        break;
      }
      node = node.next;
    }
    return min;
  };
  this.removeMin = min => {
    let lastNode = this;
    console.log(lastNode);
    let node = this.next;
    //  console.log(this.min())
    while (node !== null) {
      if (node.val == min) {
        lastNode.next = node.next;
        console.log('我找到了');
        break;
      }
      //  else if(node.next.val==this.min()){
      //      node.next=node.next.next;
      //  }
      lastNode = lastNode.next;
      node = node.next;
    }
  };
}
var mergeTwoLists = function(l1, l2) {
  const l3 = new ListNode(null);
};
let l1 = new ListNode(5);
let l2 = new ListNode(7);
let l3 = new ListNode(4);
const l4 = new ListNode(3);
const l5 = new ListNode(2);
l1.next = l2;
l2.next = l3;
l3.next = l4;
// console.log(l1)
console.log(l1);
l1.removeMin(l1.min());
console.log(l1);
