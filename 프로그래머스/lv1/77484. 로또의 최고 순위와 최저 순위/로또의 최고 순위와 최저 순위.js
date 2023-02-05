function solution(lottos, win_nums) {
  let answer = [];
  let rank = { '6': 1, '5': 2, '4': 3, '3': 4, '2': 5 }
  // 0의 개수 구하기
  let except0 = lottos.filter(ele => ele !== 0)
  // 같은 수의 개수 구하기
  let count = 0
  except0.map(exceptNum => {
    win_nums.forEach(winNum => {
      if (exceptNum === winNum) count++
    })
  })
  // 최고 성적 : 같은 수의 개수 + 0의 개수
  // 최저 성적 : 같은 수의 개수
  let best = count + lottos.length - except0.length
  let worst = count
  answer = [rank[best] || 6, rank[worst] || 6]
  return answer;
}