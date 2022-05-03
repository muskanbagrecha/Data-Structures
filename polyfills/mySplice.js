Array.prototype.mySplice = function (
  startIndex,
  numItemsToRemove,
  ...replaceableItems
) {
  let originalArray = this;
  let itemsBeforeSplice = [];
  let splicedItems = [];
  let itemsAfterSplice = [];
  let spliceEndIndex = startIndex + numItemsToRemove;

  if (startIndex > originalArray.length) {
    return [];
  }

  for (let i = 0; i < originalArray.length; i++) {
    if (i < startIndex) {
      itemsBeforeSplice.push(originalArray[i]);
    } else if (i >= startIndex && i < spliceEndIndex) {
      splicedItems.push(originalArray[i]);
    } else if (i > spliceEndIndex) {
      itemsAfterSplice.push(originalArray[i]);
    }
  }

  return splicedItems;
};
