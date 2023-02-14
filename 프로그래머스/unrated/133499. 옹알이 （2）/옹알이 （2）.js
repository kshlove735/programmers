function solution(babbling) {
  let answer = 0;
  // 조합 O but 연속 X
  for (let ele of babbling) {
    if ((/(aya){1,}|(ye){1,}|(woo){1,}|(ma){1,}/g).test(ele) && !(/(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/g).test(ele) && (ele.replace(/(aya){1,}|(ye){1,}|(woo){1,}|(ma){1,}/g, "").length === 0)) answer++;
  }

  return answer;
}