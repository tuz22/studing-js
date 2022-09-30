 /* 369 */
function game(numb) {
  if (numb % 3 == 0) {
    console.log("박수");
  }
}

/* 시험 합격 여부 */
function result(score1, score2){
  if (score1 >= 40 && score2 >= 40) {
    if (score1 + score2 >= 120) {
      console.log("합격");
    } else {
      console.log("불합격");
    }
  } else {
    console.log("불합격");
  }
}
result(70, 70);
result(30, 100);
result(50, 50);