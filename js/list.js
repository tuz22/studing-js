const div = document.querySelector('.row');

/* 상품 테이블 */
let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

products.forEach(function(data, i){
  let template = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data.title}</h5>
            <p>가격 : ${products[i].price}</p>
            <button class="buy">구매</button>
          </div>`;
  div.insertAdjacentHTML('beforeend', template);
});
cart();

/* 더보기 버튼 */
let clickCount = 1;
document.getElementById('more').addEventListener('click', function(){

  $.get('https://codingapple1.github.io/js/more' + clickCount + '.json')
    .done(function(data){
      console.log(clickCount);

      data.forEach(function(a, i){
        let template = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data[i].title}</h5>
            <p>가격 : ${data[i].price}</p>
          </div>`;
        div.insertAdjacentHTML('beforeend', template);
      });
    })
    .fail(function(){
      console.log('실패');
    })
    clickCount++;
});

/* array 정렬 */
let array = [2, 1, 9, 5, 13];
array.sort(); // 문자순으로 정렬
console.log(array);
array.sort(function(a,b){ // 숫자순으로 정렬
  return a - b
});
console.log(array);

/* filter */
let array2 = array.filter(function(a){
  return a < 4
});
console.log(array2);

/* map */
let array3 = array.map(function(a){
  return a * 4
});
console.log(array3);

/* 상품 가격순 정렬 */
document.getElementById('price').addEventListener('click', function(){
  products.sort(function(a, b){
    return a.price - b.price
  });

  div.innerHTML = '';
  products.forEach(function(data, i){
    let template = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${products[i].title}</h5>
            <p>가격 : ${products[i].price}</p>
          </div>`;
    div.insertAdjacentHTML('beforeend',template);
  });
});

/* 문자의 오름차순 정렬 */
let stringArray = ['가', '다', '나'];

stringArray.sort(function(a, b){
  if (a < b) {
    return -1
  } else {
    return 1
  }
});

/* 상품 이름순 정렬 */
document.getElementById('name').addEventListener('click', function(){
  products.sort(function(a, b){
    if (a.title < b.title) {
      return -1
    } else {
      return 1
    }
  });

  div.innerHTML = '';
  products.forEach(function(data, i){
    let template = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${products[i].title}</h5>
            <p>가격 : ${products[i].price}</p>
          </div>`;
    div.insertAdjacentHTML('beforeend',template);
    console.log(template);
  });

});

/* 가격 필터 */
document.getElementById('discount').addEventListener('click', function(){
  let oman = products.filter(function(a){
    return a.price <= 50000
  });
  console.log(oman);

  div.innerHTML = '';
  oman.forEach(function(data, i){
    let template = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${oman[i].title}</h5>
            <p>가격 : ${oman[i].price}</p>
          </div>`;
    div.insertAdjacentHTML('beforeend',template);
  });
});

/* 브라우저 localStorage 사용 */
localStorage.setItem('이름', 'kim') // 정보 저장
localStorage.getItem('이름') // 정보 가져오기
localStorage.removeItem('이름') // 정보 삭제

localStorage.setItem('numb', [1, 2, 3]); // array를 강제로 문자로 변환 -> ('numb', '1, 2, 3')

// array를 깨지지 않고 저장하는 방법: array/object -> JSON
let arr = [1, 2, 3];
let newArr = JSON.stringify(arr);
localStorage.setItem('numb', newArr);
let getArr = localStorage.getItem('numb'); // 깨지진 않았지만 문자형임. 다시 변경 JSON -> array/object
console.log(JSON.parse(getArr)[0]);

// localStorage 데이터 수정
// 자료 꺼냄 -> 꺼낸거 수정 -> 자료 다시 넣음

/* 장바구니 */

// jQuery
// $('.buy').click(function(e){
//   let title = $(e.target).siblings('h5').text(); // 타겟의 자식태그(h5)의 text

//   if(localStorage.getItem('cart') != null) {
//     let getCart = JSON.parse(localStorage.cart); // == localStorage.getItem('cart');
//     getCart.push(title); // getCart에 title 추가 (= 배열에 값 추가)
//     localStorage.setItem('cart',JSON.stringify(getCart)); // 값 추가된 배열 localStorage에 저장
//   } else {
//     localStorage.setItem('cart',JSON.stringify([title]));
//   }
// });

// Javascript
function cart(){
  products.forEach(function(data, i){ // products = 상품데이터

    document.getElementsByClassName('buy')[data.id].addEventListener('click', function(e){
      let title = e.target.previousElementSibling.previousElementSibling.innerHTML;

      if (localStorage.getItem('cart') != null) {
        let getCart = JSON.parse(localStorage.cart);
        getCart.push(title);
        localStorage.setItem('cart', JSON.stringify(getCart));
      } else {
        localStorage.setItem('cart', JSON.stringify([title]));
      }
    });
  });
}

