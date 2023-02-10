function solution(n, arr1, arr2) {
  return arr1.map((ele, i) => (arr1[i] | arr2[i]).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '))
}