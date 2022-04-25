//Time complexity :- O(arr1.length + arr2.length)
//Space complexity :- O(arr1.length + arr2.length)
const mergeSortedArrays = (arr1, arr2) => {

    if(!Array.isArray(arr1) || !Array.isArray(arr2))
    {
        throw Error("Please pass valid arguments");
    }
    if(arr1.length===0)
        return arr2;
        
    if(arr2.length===0)
        return arr1;

    let sortedArray = []
    let i = 0, j = 0;
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]===arr2[j])
        {
            sortedArray.push(arr1[i])
            sortedArray.push(arr1[i])
            i++;
            j++;
        }
        else if(arr1[i]>arr2[j])
        {
            sortedArray.push(arr2[j])
            j++;
        }
        else{
            sortedArray.push(arr1[i])
            i++;
        }
    }
    if(i!==arr1.length)
    {
        sortedArray = [...sortedArray, ...arr1.slice(i)]
    }
    else if(j!==arr2.length)
    {
        sortedArray = [...sortedArray, ...arr2.slice(j)]
    }
    return sortedArray
}

console.log(mergeSortedArrays([0, 3, 4, 31],[4, 6, 30]))