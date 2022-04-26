Array.prototype.mySlice = function (startIndex, endIndex) {
  const slicedArray = [];
  if (endIndex < startIndex) {
    return []
  }
  if (startIndex > this.length) {
    return []
  }
  if(startIndex<0)
  {
      startIndex=this.length+startIndex;
      endIndex=this.length-1;
  }
  if (startIndex === endIndex) {
    return [this[startIndex]];
  }
  if (!endIndex) {
    endIndex = this.length - 1;
  }
  for (let i = startIndex; i <= endIndex; i++) {
    if(this[i]===undefined)
    {
        continue;
    }
    slicedArray.push(this[i]);
  }
  return slicedArray;
};

console.log([1, 2, 3, 4, 5].mySlice(-1));
console.log([1, 2, 3, 4, 5].mySlice(-7));
console.log([1,2,3,4,5].slice(3))
console.log([1,2,3,4,5].mySlice(8,3))
console.log([1,2,3,4,5].mySlice(1,3))

