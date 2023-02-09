function solution(arr1, arr2) {
  return arr1.map((ele, i) => ele.map((num, j) => arr1[i][j] + arr2[i][j]))
}