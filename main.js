// The Nearest Element 

// Time Allowed: 30 mins

// Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. 
// If two numbers equally distant from n are found, the function will return the greatest of them.

// # Examples


// nearestElement(10, [1, 100, 1000]) // 0
// // 1 is the number nearest to 10.

// nearestElement(50, [100, 49, 51]) // 2
// // 49 and 51 are equally distant from 50, with 51 being the greatest.

// nearestElement(-20, [-50, -10, -30]) // 1
// // -10 and -30 are equally distant from -20, with -10 being the greatest
function difference(num,target){
  return Math.abs(num-target);
}
function nearestElement(target, numbers) {
  let diff=numbers.map((e)=>difference(e,target));
  let min = Math.min(...diff);
  let minElementIndexArray = [];
  for (let i = 0; i < diff.length; i++) {
    if (diff[i] === min) {
      minElementIndexArray.push(i);
    }
  }
 return minElementIndexArray.length===1? minElementIndexArray[0]:numbers.indexOf(minElementIndexArray.reduce((a, b)=> Math.max(numbers[a],numbers[b])));
 }


console.log(nearestElement(10, [1, 100, 1000]));
console.log(nearestElement(-20, [-50, -10, -30]));
console.log(nearestElement(50, [100, 49, 51]));
console.log(nearestElement(10, [1, 1, 1]));
