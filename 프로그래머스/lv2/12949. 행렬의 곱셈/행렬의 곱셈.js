function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let fixArr = [];

        for (let j = 0; j < arr2[0].length; j++) {
            let stayArr = []
            for (let k = 0; k < arr1[0].length; k++) {

                stayArr.push(arr1[i][k] * arr2[k][j])

            }
            fixArr.push(stayArr.reduce((acc, cur) => acc + cur, 0))
        }
        answer.push(fixArr);
    }
    return answer;
}