function solution(N, stages) {
  // 스테이지 개수 : 1 ~ N + 1
  // stages : 현재 유저가 도전 중인 스테이지 번호
  // N + 1 : 마지막 까지 클리어한 사용자
  // 실패율 : 현재 도달한 유저의 수 / 스테이지에 도달 한 플레이어 수
  // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율 = 0

  let stagesObj = {}
  stages.forEach(element => {
    stagesObj[element] = (stagesObj[element] | 0) + 1
  });

  let arr = []
  for (let i = 0; i < N; i++) {
    let curr = 0;
    let stagesFailObj = { name: '', fail: 0 }

    let total = stages.filter(n => n >= i + 1).length
    if (stagesObj[i + 1]) {
      curr += stagesObj[i + 1]
    }
    stagesFailObj.name = i + 1;
    stagesFailObj.fail = curr / total
    arr.push(stagesFailObj)
  }
  return arr.sort((a, b) => b.fail - a.fail).map(e => e.name);
}