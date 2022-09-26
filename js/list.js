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
          </div>`;
  div.insertAdjacentHTML('beforeend', template);
});

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

