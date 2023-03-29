function solution(elements) {
    elements = elements.concat(elements)
    let arr = []
    let pointer = 0;

    function help(length, pointer) {

        if (length === 0) return;
        for (let i = 0; i < length; i++) {
            let sum = elements[i];

            let j = 1
            while (pointer !== 0 && j <= pointer && pointer < length) {
                sum += elements[i + j]
                j++;
            }
            arr.push(sum)
        }
        help(length - 1, pointer + 1)
    }

    help(elements.length, pointer)

    return new Set(arr).size;
}