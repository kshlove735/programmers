function solution(arr) {

    // 최소 공배수
    let LCM = arr[0]
    for (let i = 1; i < arr.length; i++) {
        LCM = LCM * arr[i] / getGCD(Math.max(LCM, arr[i]), Math.min(LCM, arr[i]))
    }

    return LCM
}
function getGCD(a, b) {
    while (true) {
        if (a % b === 0) return b
        else[a, b] = [b, a % b];
    }
}