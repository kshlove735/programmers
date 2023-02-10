function solution(s, n) {

  return s.split('').map(ele => {

    if (ele === ' ') return ' ';

    if (ele.charCodeAt() >= 97 && ele.charCodeAt() <= 122 && ele.charCodeAt() + n > 122) return String.fromCharCode(ele.charCodeAt() + n - 26)
    if (ele.charCodeAt() >= 65 && ele.charCodeAt() <= 90 && ele.charCodeAt() + n > 90) return String.fromCharCode(ele.charCodeAt() + n - 26)
    return String.fromCharCode(ele.charCodeAt() + n);
  }).join('');

}