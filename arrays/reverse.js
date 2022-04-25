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

const reverseStringUsingInbuiltMethod = str => {
    if(typeof str !== "string")
    {
        throw Error("Invalid Input")
    }
    return [...str].reverse().join("")
}

console.log(reverseString("Hey, there. What a nice day!"))
console.log(reverseStringUsingInbuiltMethod("Hey, there. What a nice day!"))

//Reverse Number
const reverseNumber = num => {
    if(!num)
        throw Error("Invalid")
    const reversedNumArray = []
    while(num>0)
        {
            const digit = num%10;
            reversedNumArray.push(digit)
            num=Math.round(num/10)
        }
    return Number(reversedNumArray.join(""))
}

const reverseNumberUsingInbuiltMethod = num => {
    if(!num)
        throw Error("Invalid")
    const reversedInput = [...num.toString()].reverse().join("")
    return Number(reversedInput)
}

console.log(reverseArray(123))
console.log(reverseUsingInbuiltMethods(123))

