function solution(citationsn) {

  let arr = [];
  for (let i = 0; i < citationsn.length; i++) {
    let ele = citationsn[i];
    if (citationsn.filter(e => e >= ele).length === ele) arr.push(ele);
  }
  arr.sort((a, b) => b - a);
  return arr[0]
}