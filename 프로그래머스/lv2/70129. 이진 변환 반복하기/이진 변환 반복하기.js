function solution(s) {

  let countTransfer = 0;
  let count0 = 0;

  while (s !== '1') {
    let length = s.length;
    let remove0 = s.replace(/0/g, '').length
    count0 += length - remove0
    s = remove0.toString(2)
    countTransfer++;
  }
  return [countTransfer, count0];
}