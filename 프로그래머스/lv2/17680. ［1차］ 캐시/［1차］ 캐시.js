function solution(cacheSize, cities) {
    let answer = 0;
    let LUR = [];
    for (let city of cities) {
        city = city.toLowerCase();
        let i = LUR.indexOf(city);
        if (i !== -1) {
            LUR.splice(i, 1);
            answer += 1;
        } else {
            answer += 5;
        }
        LUR.push(city);
        if (LUR.length > cacheSize) LUR.shift();
    }
    return answer;
}