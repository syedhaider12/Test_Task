const is_palindrome ='madam'
const palindrome=(is_palindrome)=>{
  let i=0;
  let j=is_palindrome.length-1;
  let result;
  while(j>i)
  {
   if (is_palindrome[i++] != is_palindrome[j--]){
     result="False";
  }else{

    result="true";
  }
}
  return result;
}
console.log(palindrome(is_palindrome));