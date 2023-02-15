function solution(numbers, hand) {
  
  let fixedObj = {
    1: { 'pick': 'L', 'location': [1, 4] },
    4: { 'pick': 'L', 'location': [1, 3] },
    7: { 'pick': 'L', 'location': [1, 2] },
    3: { 'pick': 'R', 'location': [3, 4] },
    6: { 'pick': 'R', 'location': [3, 3] },
    9: { 'pick': 'R', 'location': [3, 2] },
    2: { 'pick': 'M', 'location': [2, 4] },
    5: { 'pick': 'M', 'location': [2, 3] },
    8: { 'pick': 'M', 'location': [2, 2] },
    0: { 'pick': 'M', 'location': [2, 1] },
  }

  let leftCurr = [1, 1]
  let rightCurr = [3, 1]

  console.log(numbers);

  return numbers.map(num => {

    if (fixedObj[num].pick !== 'M') {
      fixedObj[num].pick === 'R' ? rightCurr = fixedObj[num].location : leftCurr = fixedObj[num].location
      return fixedObj[num].pick
    } else {
      let leftDistance = Math.abs(fixedObj[num].location[0] - leftCurr[0]) + Math.abs(fixedObj[num].location[1] - leftCurr[1])
      let rightDistance = Math.abs(fixedObj[num].location[0] - rightCurr[0]) + Math.abs(fixedObj[num].location[1] - rightCurr[1])

      if (leftDistance < rightDistance) {
        leftCurr = fixedObj[num].location
        return 'L'
      }
      else if (leftDistance > rightDistance) {
        rightCurr = fixedObj[num].location
        return 'R'
      }
      else {
        hand[0].toUpperCase() === "R" ? rightCurr = fixedObj[num].location : leftCurr = fixedObj[num].location
        return hand[0].toUpperCase()
      }

    }
  }).join('')

}