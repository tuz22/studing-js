 // 예금액이 5만원 미만이면 금리 15%, 미만이면 금리 20%, 1년 후 총 예금액은?
function savingInterest(money){
  let sum;
  if (money < 50000) {
    sum = money * 1.15
  } else {
    sum = money * 1.2;
  }
  console.log(sum);
}
savingInterest(60000);

// 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페. 총 마실 수 있는 커피양은?
function refillCoffee(coffee){
  let first = coffee * (2/3);
  let second = first * (2/3);
  coffee += (first + second); 
  console.log(coffee);
}
refillCoffee(360);
