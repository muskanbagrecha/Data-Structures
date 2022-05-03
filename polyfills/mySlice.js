Array.prototype.mySlice = function (startIndex, endIndex) {
  const slicedArray = [];

  //if startindex is not passed or if it is null
  if (!startIndex) {
    startIndex = 0;
  }

  //When both indices are positive, end index cannot be greater than start index.
  if (endIndex < startIndex) {
    return [];
  }

  //Start index cannot be greater than the array length
  if (startIndex > this.length) {
    return [];
  }

  //offsetting if there is a negative index.
  if (startIndex < 0) {
    startIndex = this.length + startIndex;
    if (startIndex < 0) {
      //If on offsetting, index is negative, make it 0 by default.
      startIndex = 0;
    }
    endIndex = this.length;
  }

  if (startIndex === endIndex) {
    return [this[startIndex]];
  }

  //If no end index is provided, it will be the end of the array by default.
  if (!endIndex) {
    endIndex = this.length;
  }

  for (let i = startIndex; i < endIndex; i++) {
    slicedArray.push(this[i]);
  }
  return slicedArray;
};

console.log([1, 2, 3, 4, 5].mySlice(-1));
console.log([1, 2, 3, 4, 5, undefined].mySlice(-7));
console.log([1, 2, 3, 4, 5].mySlice(3));
console.log([1, 2, 3, 4, 5].mySlice(8, 3));
console.log([1, 2, 3, 4, 5].mySlice(1, "3"));
console.log([1, 2, 3, 4, 5].mySlice(1, 3));
console.log([1, 2, 3, 4, 5].mySlice(null, 2));
console.log({}.mySlice())