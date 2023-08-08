const arr=[1,2,3,5,7]
const right_rotate=()=>{
  const rotated_arr=[];
  rotated_arr[0]=arr[arr.length-1];
  for(let i=0; i<arr.length-1 ;  i++){
    rotated_arr[i+1]=arr[i];
  }
  return rotated_arr;
}
console.log(right_rotate(arr));