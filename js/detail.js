/* tab */
let tabBtns = document.querySelectorAll('.tab-button');
let tabContents = document.querySelectorAll('.tab-content');
console.log(tabBtns.length);

// for (let i = 0; i < tabBtns.length; i++){
//   tabBtns[i].addEventListener('click', function(){
//     openTab(i);
//   });
// }

document.querySelector('.list').addEventListener('click', function(e){
  // if (e.target == document.querySelectorAll('.tab-button')[0]){
  //   openTab(0)
  // }
  openTab(e.target.dataset.id);
});

function openTab(numb) {
  document.querySelector('.orange').classList.remove('orange');
  tabBtns[numb].classList.add('orange');

  document.querySelector('.show').classList.remove('show');
  tabContents[numb].classList.add('show');
}

/* array 자료형: 순서대로 저장 */
let fruit = ['사과', 3000, 'red'];
fruit[0] = '체리'; // 자료 수정
fruit[3] = '할인'; // 자료 추가
console.log(fruit)
console.log(fruit[0])

fruit.sort(); // 자료 정렬
fruit.slice(1,2); // 자료 자르기
console.log(fruit.slice(0,2));

/* object 자료형: key(이름)로 저장 */
let fruit2 = { name : '사과', price : 3000 }; // key : value 형태
fruit2.name = '체리'; // 자료 수정
console.log(fruit2)
console.log(fruit2.name) // fruit2['name']

let fruit3 = { name: '바나나', price : [1000, 2000, 3000] }
document.querySelector('.fruit-price').innerHTML = fruit3.price[2];
console.log(fruit3.price[2]);

/* 상품 select */
document.getElementsByClassName('form-select')[0].addEventListener('input', function(e){
  // let select = document.getElementsByClassName('form-select')[0].value;
  let select = e.currentTarget.value; // == this.value;
  if (select == '셔츠') {
    document.getElementsByClassName('form-select')[1].classList.remove('form-hide');
  } else {
    document.getElementsByClassName('form-select')[1].classList.add('form-hide');
  }
});

