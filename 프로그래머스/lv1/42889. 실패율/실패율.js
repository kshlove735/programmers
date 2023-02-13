function solution(N, stages) {
  let arr = []
  for (let i = 1; i <= N; i++) {
    let curr = stages.filter(n => n === i).length
    let total = stages.filter(n => n >= i).length
    arr.push([i, curr / total])
  }
  return arr.sort((a, b) => b[1] - a[1]).map(ele => ele[0]);
}