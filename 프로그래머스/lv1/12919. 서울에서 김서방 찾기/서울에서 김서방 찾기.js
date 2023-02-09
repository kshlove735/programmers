function solution(seoul) {
  // 방법 1
  let idx = seoul.indexOf('Kim')

  // 방법 2
  // let idx = 0
  // for (let i = 0; i < seoul.length; i++) {
  //   if (seoul[i] === 'Kim') {
  //     idx = i;
  //     break;
  //   }
  // }

  return `김서방은 ${idx}에 있다`
}