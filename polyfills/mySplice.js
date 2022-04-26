// Array.prototype.mySplice = function(startIndex, numElementToReplace, replaceElements){
//     const splicedArray = [];
//     const elementsToSplice = this.mySlice(startIndex, startIndex + numElementToReplace);
//     splicedArray.push(...elementsToSplice);
//     if(replaceElements){
//         splicedArray.push(...replaceElements);
//     }
//     const elementsToSpliceLength = elementsToSplice.length;
//     for(let i = startIndex + numElementToReplace; i < this.length; i++){
//         this[i - elementsToSpliceLength] = this[i];
//     }
//     this.length = this.length - elementsToSpliceLength;
//     return splicedArray;   
// }

Array.prototype.mySplice = function(startIndex, numOfElementsToReplace, replaceableElements){
    if(startIndex>this.length){
        return [];
    }
    
}