function solution(array, commands) {
  return commands.map((ele) => array.slice(ele[0] - 1, ele[1]).sort((a,b)=>a-b)[ele[2] - 1])
}