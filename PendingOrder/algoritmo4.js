/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function(strs) {
  let countWords = {};
  if(strs.length === 1) return strs[0].slice(0,2);
  strs.forEach(word => {
    let prefix = word.slice(0, 2);
    let key = Object.keys(countWords).find(key => key === prefix );
    if (key) {
      countWords[key] += 1;
    } else {
      countWords[prefix] = 1;
    }
  });
  let result = prefixMajor(countWords);
  return result;
};

function prefixMajor(obj){
  let keys = Object.keys(obj);
  let str = "";
  let tmpCount = 0
  keys.forEach((key, index) => {
    if(index === 0) {
      tmpCount = obj[key];
      str = key;
      return;
    } else {
      if (tmpCount < obj[key]){
        tmpCount = obj[key];
        str = key;
      }
    }
  });
  return tmpCount > 1 ? str : "";
};

let array = ["a"];
console.log("Common prefix is: ", longestCommonPrefix(array));
