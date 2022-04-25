class myArray {
  constructor(data = {}, length = 0) {
    this.data = data;
    this.length = length;
  }

  printAll() {
    if (this.length === 0) {
      return {};
    }
    for (let i = 0; i < this.length; i++) {
      console.log(this.data[i]);
    }
  }

  getItem(index) {
    return this.data[index];
  }

  pushItem(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  popItem() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteItemAt(index) {
    if (index < 0 || index > this.length) {
      throw Error("Invalid Index");
    }
    const deletedItem = this[index];
    delete this.data[index];
    for (let i = index; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    return deletedItem;
  }
}

const arr = new myArray();
console.log(arr.printAll());
arr.pushItem(2);
arr.pushItem(5);
arr.pushItem(10);
arr.popItem();
arr.pushItem("hello");
arr.deleteItemAt(0);
console.log(arr.data);
