function solution(clothes) {
    let answer = 1;
    let obj = {}
    clothes.forEach(cloth => obj[cloth[1]] = (obj[cloth[1]] | 0) + 1)

    let values = Object.values(obj);

    // 각 의상 종류중 1개 선택할 수 있는 경우의 수 + 1(선택 안할 경우)
    values.forEach(value => answer *= (value + 1))

    // 모두 선택 안할 경우 빼기
    return answer - 1;
}