const _ = require('lodash');
class Set {
  constructor() {
    //属性
    this.items = {};
    //方法
  }
  add(value) {
    //判断当前集合中是否包含了该元素
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  }
  //has方法
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  //remove方法
  remove(value) {
    //1.判断该集合中是否包含该元素
    if (!this.has(value)) {
      return false;
    }
    delete this.items[value];
    return true;
  }
  //clear方法
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  //   获取集合中所有的值
  values() {
    return Object.keys(this.items);
  }
  //   集合间操作
  //并集
  union(otherSet) {
    const unionSet = new Set();
    // 将A集合中所有的元素添加到新集合中
    let values = this.values();
    values.forEach(element => {
      unionSet.add(element);
    });
    // 获取另外一个集合中的数据
    values = otherSet.values();
    values.forEach(element => {
      unionSet.add(element);
    });
    return unionSet;
  }
  //   交集
  com(otherSet) {
    const comSet = new Set();
    let values = this.values();
    const valuesOther = otherSet.values();
    const interValues = _.intersection(values, valuesOther);
    interValues.forEach(item => {
      comSet.add(item);
    });
    return comSet;
  }
  //交集方法2
  intersection(otherSet) {
    //   this:集合A
    // otherSet:集合B
    // 1.创建新的集合
    const intersectionSet = new Set();
    let values = this.values();
    values.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  }
  //   差集
  difference(otherSet) {
    const differenceSet = new Set();
    const values = this.values();
    const valuesOhter = otherSet.values();
    const differenceArr = _.difference(values, valuesOhter);
    differenceArr.forEach(item => {
      differenceSet.add(item);
    });
    return differenceSet;
  }
  //   差集
  differenceTwo(otherSet) {
    const differenceSet = new Set();
    //    const intersectionSet = new Set();
    let values = this.values();
    values.forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });
    // return intersectionSet;
    return differenceSet;
  }
  isChild(otherSet) {
    // const neweSet = new Set();
    let values = this.values();
    let otherValues = otherSet.values();
    const newArr = _.intersection(values, otherValues);
    if (_.isEqual(newArr, otherValues) || _.isEqual(newArr, values)) {
      return true;
    } else {
      return false;
    }
  }
}

const setA = new Set();
const setB = new Set();
let setC = new Set();
setA.add('a');
setA.add('abda');
setA.add('aba');
// setA.add('cda')
setB.add('a');
// setB.add('bda');
// setC = setA.union(setB);
// console.log(setC.values());

// setC = setA.com(setB);
// console.log(setC.values());

console.log(setA.isChild(setB));
