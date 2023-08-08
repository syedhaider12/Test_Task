const maxNumber = (arr) => {

  let max =arr[0];
  for (let i = 1 ; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
const findMissing=(arr,number)=>{
  
   let missing=[];
   for (let i=0; i<=number; i++){
    if(!arr.includes(i)){
      missing.push(i);
    }
   }
   return missing;
}
const arr = [1, 4, 7, 9, 6]
console.log(findMissing(arr,maxNumber(arr)));