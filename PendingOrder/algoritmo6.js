const axios = require('axios');

async function getVoteCount(cityName, estimatedCost) {
  let arrayInfo = await getData(cityName, estimatedCost).then(response => {
    return response.data.data;
  });
  return await sumVotes(arrayInfo)
}

let getData = async (cityname, estimated_cost) => {
  return await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${cityname}&estimated_cost=${estimated_cost}`)
}

let sumVotes = (arrayInfo) => {
  if (arrayInfo.length > 0) {
    let sumVotes = 0;
    arrayInfo.forEach(element => {
      sumVotes += element.user_rating.votes
    });
    return sumVotes;
  } else {
    return -1;
  }
}

let cityname = "Seattle";
let estimated_cost = 160;

async function main() {
let result = await getVoteCount(cityname, estimated_cost);
console.log("Result : ", result);
}

main();
