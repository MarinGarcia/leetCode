/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let size = nums.length
  let result = null;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++){
      let sum = nums[i] + nums[j];
        if (sum == target && i != j) { 
          result = [i, j];
           break;
        }
      }
    if (result != null) break;
  }
  return result;
};