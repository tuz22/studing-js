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

/* 상품 select - 사이즈 */
let size = [28, 29, 30, 31];

document.getElementsByClassName('form-select')[0].addEventListener('input', function(e){
  let select = e.currentTarget.value; // == this.value;
  
  if (select == '셔츠') {
    document.getElementsByClassName('form-select')[1].classList.remove('form-hide');
  } else if (select == '바지'){
    document.getElementsByClassName('form-select')[1].classList.remove('form-hide');
    document.getElementsByClassName('form-select')[1].innerHTML = '';

    size.forEach(function(data){
      const option = document.createElement('option');
      option.innerHTML = `<option>${data}</option>`;
      document.querySelectorAll('.form-select')[1].appendChild(option);
    })
  } else {
    document.getElementsByClassName('form-select')[1].classList.add('form-hide');
  }
});

/* js로 html 생성 */
// // 추가방법
// let a = document.createElement('p');
// a.innerHTML = 'a:안녕';
// document.querySelector('#test').appendChild(a);

// let b = '<p>b:안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', b);

// 변경방법
// document.querySelector('#test').innerHTML = b;

let obj = { name: 'yoon', age: 15 };
for (let key in obj){ // obj안에 든 key 갯수만큼 반복
  console.log(key); // name; age;
  console.log(obj[key]); // yoon; 15;
}

$.get('https://codingapple1.github.io/price.json')
  .done(function(data){
    console.log(data.price);
  })
  .fail(function(){
    console.log('실패');
  })

// 바닐라 자바스크립트로 ajax 요청
// fetch('https://codingapple1.github.io/price.json')
//   .then(res => res.json()) // json을 object로 변환
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// $.post('https://codingapple1.github.io/hello.txt', {name :'kim'})
// .done(function(data){
//   console.log(data);
// })
