/* 이름 찾아주는 함수 */
let nameList = ['철수', '영희', '민지', '지원'];
let data = "";
function findName(data){
    nameList.forEach(function(e){
      if (data == e) {
        console.log("있어요");
      }
    });
}

/* 구구단 */
function gugudan(dan){
  for(let i = 1; i < 10; i++){
    console.log(dan * i);
  }
}
function gugudan(){
  for(let i = 2; i < 10; i++){
    console.log(i + '단');
    for (let k = 1; k < 10; k++){
      console.log(k * i);
    }
  }
}

/* 평균점수 계산기 */
function avg(arr, score){

  let arrAvg = 0;
  for (let i = 0; i < arr.length; i++){
    arrAvg = arrAvg + arr[i];
  }
  if (arrAvg / arr.length < score){
      console.log('올랐어요');
  } else if (arrAvg / arr.length == score){
    console.log('같아요');
  } else {
    console.log('떨어졌어요');
  }
}