class HashTable {
  // 属性
  constructor() {
    this.storage = [];
    this.count = 0;
    this.limit = 7;
  }
  // 方法
  //   哈希函数
  //   1》将字符串转成比较大的数字：hashCode
  //2>将大的数字hashCode压缩到数组范围之内
  hashFunc(str, size) {
    // 1.定义hashCode变量
    let hashCode = 0;
    // 2.霍纳算法，来计算hashCode得值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
      //   str.charCodeAt(i); //获取某个字符unicode编码
      //3.取余操作
      const index = hashCode % size;
      return index;
    }
  }
  //   插入和修改操作
  put(key, value) {
    //根据key获取索引值
    const index = this.hashFunc(key, this.limit);
    // 根据index取出对应的bucket
    let bucket = this.storage[index];
    // 判断该bucket是否为null
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] == key) {
        tuple[1] = value;

        return;
      }
    }
    // 5.不是修改，进行添加操作
    bucket.push([key, value]);
    this.count += 1;
    if (this.count > this.limit * 0.75) {
      const newLimit = this.limit * 2;
      while (!this.isPrime(newLimit)) {
        newLimit++;
      }
      this.resize(newLimit);
    }
  }
  //   获取操作
  get(key) {
    const index = this.hashFunc(key, this.limit);
    // 根据index获取对应的bucket
    const bucket = this.storage[index];
    if (!bucket) {
      return null;
    }
    // 有bucket,进行线性查找
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] == key) {
        return tuple[1];
      }
    }
    //   依然没有找到，那么返回null
    return null;
  }
  //   删除操作
  remove(key) {
    const index = this.hashFunc(key, this.limit);
    const bucket = this.storage[index];
    if (!bucket) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] == key) {
        bucket.splice(i, 1);
        this.count--;
        return tuple[1];
        // break;
      }
      if (this.limit > 7 && this.count < this.limit * 0.25) {
        const newLimit = Math.floor(this.limit / 2);
        while (!this.isPrime(newLimit)) {
          newLimit++;
        }
        this.resize(newLimit);
        // this.resize();
      }
    }

    return null;
  }
  // 其他方法
  // 判断哈希表是否为空
  isEmpty() {
    return this.count == 0;
  }
  size() {
    return this.count;
  }
  resize(newLimit) {
    // 保存旧的数组内容
    const oldStorage = this.storage;
    // 重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;
    // 遍历oldStorage中所有的桶
    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i];
      if (bucket == null) {
        continue;
      }
      for (let j = 0; j < bucket.length; j++) {
        const tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  }
  // 判断质数
  // 质数：只能被1和本身整除
  isPrime(num) {
    const temp = parseInt(Math.sqrt(num));
    for (let i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
// 创建哈希表
const hashA = new HashTable();
// 插入数据
hashA.put("abc", "123");
hashA.put("cda", "321");
hashA.put("nb", "521");
const get = hashA.get("abc");
console.log(get);
hashA.put("abc", "141");
const get2 = hashA.get("abc");
console.log(get2);
console.log(hashA.isPrime(40));
