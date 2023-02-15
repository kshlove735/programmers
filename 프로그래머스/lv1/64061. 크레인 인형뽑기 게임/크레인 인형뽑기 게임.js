function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let toy = board[j][moves[i] - 1]
      if (toy === 0) {
        continue;
      } else {
        if (bucket[bucket.length - 1] === toy) {
          bucket.pop();
          answer += 2;
        } else {
          bucket.push(toy);
        }
        board[j][moves[i] - 1] = 0
        break;
      }
    }
  }
  return answer;
}