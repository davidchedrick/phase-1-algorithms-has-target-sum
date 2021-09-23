function hasTargetSum(array, target) {
  for (i = 0; i < array.length; i++){
    const num = target - array[i]
    for (let j = i + 1; j < array.length; j++){
        if (array[j] === num)
        return true
    }
 }
 return false
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10)
/* 
  Write the Big O time complexity of your function here\
  o(n^2)
*/

/* 
  Add your pseudocode here
  take first number add it to second, see if it adds to target if not
  add first to third and so on until two numbers add to target 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
