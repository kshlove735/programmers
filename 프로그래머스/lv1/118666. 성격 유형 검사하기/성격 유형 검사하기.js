function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}

// function solution(survey, choices) {
//   let answer = [];
//   let surveyObj = {
//     1: { 'R': 0, 'T': 0 },
//     2: { 'C': 0, 'F': 0 },
//     3: { 'J': 0, 'M': 0 },
//     4: { 'A': 0, 'N': 0 }
//   }
//   for (let i = 0; i < survey.length; i++) {
//     let score = 0;

//     if (choices[i] === 1 || choices[i] === 7) score = 3
//     else if (choices[i] === 2 || choices[i] === 6) score = 2
//     else if (choices[i] === 3 || choices[i] === 5) score = 1
//     else score = 0


//     if (survey[i] === "AN" || survey[i] === "NA") {
//       if (choices[i] > 4) surveyObj[4][survey[i][1]] += score
//       else if (choices[i] < 4) surveyObj[4][survey[i][0]] += score
//     } else if (survey[i] === "CF" || survey[i] === "FC") {
//       if (choices[i] > 4) surveyObj[2][survey[i][1]] += score
//       else if (choices[i] < 4) surveyObj[2][survey[i][0]] += score
//     } else if (survey[i] === "JM" || survey[i] === "MJ") {
//       if (choices[i] > 4) surveyObj[3][survey[i][1]] += score
//       else if (choices[i] < 4) surveyObj[3][survey[i][0]] += score
//     } else {
//       if (choices[i] > 4) surveyObj[1][survey[i][1]] += score
//       else if (choices[i] < 4) surveyObj[1][survey[i][0]] += score
//     }
//   }

//   for (let s in surveyObj) {
//     let keys = Object.keys(surveyObj[s])
//     if(surveyObj[s][keys[0]] >= surveyObj[s][keys[1]]) answer.push(keys[0])
//     else answer.push(keys[1])
//   }


//   return answer.join('');
// }