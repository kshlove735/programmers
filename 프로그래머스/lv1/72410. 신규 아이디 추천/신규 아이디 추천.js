function solution(new_id) {
  let answer = '';

  // * 1단계
  new_id = new_id.replace(/[A-Z]/g, char => char.toLowerCase())
  // * 2단계
  new_id = new_id.replace(/[^\w-_.]/g, '');

  // * 3단계
  new_id = new_id.replace(/\.{2,}/g, '.');
  // * 4단계
  new_id = new_id.replace(/^\.+|\.$/g, '');

  //* 5단계
  if (new_id.length === 0) new_id = 'a'
  // * 6단계 
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15)
    if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, 14)
  }
  //* 7단계
  if (new_id.length <= 2) {
    let addWord = new_id[new_id.length - 1]
    while (new_id.length <= 2) {
      new_id = new_id + addWord
    }
  }

  answer = new_id
  return answer;
}