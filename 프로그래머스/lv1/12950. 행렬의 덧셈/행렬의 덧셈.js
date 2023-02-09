function solution(arr1, arr2) {
  return arr1.map((ele, i) => {
    return ele.map((num, j) => {
      return arr1[i][j] + arr2[i][j]
    })
  })
}