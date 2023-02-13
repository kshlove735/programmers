function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => b - a)
  let maxSum = nums[0] + nums[1] + nums[2]

  function isPrime(maxSum) {
    let arr = Array(maxSum + 1).fill(true).fill(false, 0, 2)

    for (let i = 2; i <= Math.sqrt(maxSum); i++) {

      if (arr[i]) {
        for (let j = i * i; j <= maxSum; j += i) {
          arr[j] = false;
        }
      }
    }
    let primeObj = {}
    arr.forEach((e, i) => {
      e === true ? primeObj[i] = e : e
    })
    return primeObj
  }

  let primeObj = isPrime(maxSum)

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (primeObj[nums[i] + nums[j] + nums[k]]) answer++
      }
    }
  }

  return answer;
}
