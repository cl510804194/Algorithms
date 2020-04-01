class ArrayList {
  public array: Array<number> = [];
  public insert(item: number) {
    this.array.push(item);
  }
  public toString() {
    console.log(this.array);
    return this.array.join("-");
  }
  //   交换两个数据的位置
  public swap(m: number, n: number) {
    [this.array[m], this.array[n]] = [this.array[n], this.array[m]];
  }
  //   冒泡排序，时间复杂度为O(n的平方)
  public bubblesort() {
    const length = this.array.length;
    for (let j = length - 1; j >= 0; j--) {
      for (let i = 0; i < length - 1; i++) {
        if (this.array[i] > this.array[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    }
  }
  //   选择排序
  public selectionSort() {
    const length = this.array.length;
    let min = 0;
    for (let j = 0; j < length - 1; j++) {
      let min = j;
      for (let i = min + 1; i < length; i++) {
        if (this.array[min] > this.array[i]) {
          min = i;
        }
      }
      this.swap(min, j);
    }
  }
}
const arr = new ArrayList();
arr.insert(46);
arr.insert(64);
arr.insert(45);
arr.insert(26);
// arr.bubblesort();
arr.selectionSort();
console.log(arr.array);
