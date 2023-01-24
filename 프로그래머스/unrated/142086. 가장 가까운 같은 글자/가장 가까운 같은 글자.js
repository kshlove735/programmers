function solution(s) {
  let answer = [];
  let obj = {};
  for (let i = 0; i < s.length; i++) {
     
   if(s.substr(0,i).lastIndexOf(s[i])!==-1){
       answer.push(i-s.substr(0,i).lastIndexOf(s[i]))
   }else{
       answer.push(s.substr(0,i).lastIndexOf(s[i]))
   }
  }
  return answer;
}