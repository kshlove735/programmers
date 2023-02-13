function solution(dartResult) {
  // 점수 | 보너스 | [옵션]
  // 총 3번 기회 0 ~ 10점
  // S, D, T -> 1제곱, 2제곱, 3재곱
  // '*' : 해당 점수, 바로전 점수 각 2배
  //  첫번째 경우 해당 점수만 2배
  //  중첩 가능
  // '#' : 해당 점수 * -1

  let bonus = { 'S': 1, 'D': 2, 'T': 3 }

  let arr = dartResult.match(/\d{1,}[a-z]{1}[*#]?/gi);

  let resultArr = []

  arr.forEach((ele, i) => {
    let result = Math.pow(ele.match(/\d\d?/g)[0], bonus[ele.match(/[a-z]/gi)[0]])

    if (ele.match(/[*]/g)) {
      if (i !== 0) resultArr[i - 1] *= 2
      result *= 2
    }

    if (ele.match(/[#]/g)) result *= -1

    resultArr.push(result);
  })

  return resultArr.reduce((acc, cur) => acc + cur)
}
