function solution(id_list, report, k) {
  let answer = [];
  let reportObj = {}
  let idObj = {}

  id_list.forEach(element => idObj[element] = 0)


  report.forEach(element => {
    const [reporter, target] = element.split(' ')
    reportObj[target] ? reportObj[target].add(reporter) : reportObj[target] = new Set([reporter])
  });

  for (let target in reportObj) {
    if (reportObj[target].size >= k) {
      for (let a of reportObj[target]) {
        idObj[a]++
      }
    }
  }

  answer = id_list.map(element => idObj[element])

  return answer;
}