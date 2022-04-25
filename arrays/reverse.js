const reverseString = str => {
    if(typeof str !== "string")
    {
        throw Error("Invalid Input")
    }
    let reversedString = "";
    for(let i = str.length - 1; i>=0 ; i--)
    {
        reversedString+=str[i]
    }
    return reversedString;
}

const reverseStringSecond = str => {
    if(typeof str !== "string")
    {
        throw Error("Invalid Input")
    }
    return [...str].reverse().join("")
}

console.log(reverseString("Hey, there. What a nice day!"))
console.log(reverseStringSecond("Hey, there. What a nice day!"))
