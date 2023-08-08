const arr = [1, 2, 2, 1, 3, 3, 2, 8, 8, 8, 2, 1, 2, 3, 1];
const repated_number = (arr) => {
  let max_time_repated = 0;
  let repatedNumber ;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > max_time_repated) {
        max_time_repated = count;
        repatedNumber = arr[i];
      }
    }
  }
  return{ max_time_repated , repatedNumber};
};
console.log(repated_number(arr))