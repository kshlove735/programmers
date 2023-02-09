function solution(arr) {
  let min = Math.min(...arr)
  return arr.length === 1 ? [-1] : arr.filter(num => min < num)
}