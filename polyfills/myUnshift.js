Array.prototype.myUnshift = function (element) {
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + 1] = this[i];
  }
  this[0] = element;
  return this.length;
};

const arr = ["a", "b", "x"];
console.log(arrr.myUnshift(5));
console.log(arr);
