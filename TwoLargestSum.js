const addTwoLaregest=(arr)=>{
  let first_Large=0;
  let second_Large=0;
  for(let i=0;i<arr.length;i++){
   if(arr[i]>first_Large){
    second_Large=first_Large;
    first_Large=arr[i]
   }
   else if(arr[i]> second_Large && arr[i] !==first_Large){
       second_Large=arr[i]
   }
  }
  console.log(`Ist Large  ${first_Large} and 2nd Large  ${second_Large}`)
  console.log(first_Large+second_Large);
  
}

const arr=[133,49,73,62,92]
addTwoLaregest(arr)
