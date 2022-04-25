// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Approach 1 :- Brute force

var twoSum = function (nums, target) { //O(n**2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  return [-1, -1] //question states that there will always be one solution so this wont get executed
};

//Approach 2 :- 
var twoSumApproach2 = function(nums, target) //O(n**2)
{
    let tempArray = []
    for(let i = 0; i<nums.length; i++) //O(n)
    {
        let other = target - nums[i];
        if(tempArray.includes(other)) //O(n)
        {
            return [i, tempArray.indexOf(other)]
        }
        else{
            tempArray.push(nums[i])
        }
    }
}

// Approach n :- Hashmaps (O(n))
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) //O(n)
    {
        const complement = target - nums[i]
        if (map.has(complement) && map.get(complement) !== i) {
            return ([i, map.get(complement)])
        } else {
            map.set(nums[i], i)
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSumApproach2([2,7,11,15], 9))
console.log(twoSumWithMap([2,7,11,15], 9))