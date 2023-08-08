const arr=[133,49,73,62,92]
const desecending_order=(arr)=>{
 for(let x = 0; x<arr.length - 1; x++){
  for(let y = x+1; y<arr.length; y++){
       if (arr[x]<arr[y])
       {
        temp=arr[x];
        arr[x]=arr[y];
        arr[y]=temp;
       }
  }
 }
console.log(arr)
}
desecending_order(arr);
