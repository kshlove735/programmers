function solution(today, terms, privacies) {
  let answer = [];
  let expireDate = new Date(today);
  let termsObj = {};
  for (let term of terms) {
    let termSplit = term.split(" ");
    termsObj[termSplit[0]] = termSplit[1];
  }
  for (let i = 0; i < privacies.length; i++) {
    let privaciySpit = privacies[i].split(" ");
    let acceptDate = new Date(privaciySpit[0]);

    acceptDate.setMonth(acceptDate.getMonth() + parseInt(termsObj[privaciySpit[1]]));

    if (expireDate.getTime() >= acceptDate.getTime()) {
      answer.push(i + 1);
    }
  }

  return answer;
}