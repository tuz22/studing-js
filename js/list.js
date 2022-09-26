/* 상품 테이블 */
let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

products.forEach(function(data, i){
  const div = document.querySelector('.row');
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
  const div = document.querySelector('.row');
  

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
//   if(clickCount == 1){
//     $.get('https://codingapple1.github.io/js/more1.json')
//       .done(function(data){
//         clickCount++;
//         console.log(clickCount);
  
//         data.forEach(function(a, i){
//           let template = 
//             `<div class="col-sm-4">
//               <img src="https://via.placeholder.com/600" class="w-100">
//               <h5>${data[i].title}</h5>
//               <p>가격 : ${data[i].price}</p>
//             </div>`;
//           div.insertAdjacentHTML('beforeend', template);
//         });
//       })
//       .fail(function(){
//         console.log('실패');
//       })
//   }
//   else if(clickCount == 2){
//     $.get('https://codingapple1.github.io/js/more'+2+'.json')
//       .done(function(data){
//         clickCount++;
//         console.log(clickCount);
        
//         data.forEach(function(a, i){
//           let template = 
//             `<div class="col-sm-4">
//               <img src="https://via.placeholder.com/600" class="w-100">
//               <h5>${data[i].title}</h5>
//               <p>가격 : ${data[i].price}</p>
//             </div>`;
//             div.insertAdjacentHTML('beforeend', template);
//         });
//       })
//       .fail(function(){
//         console.log('실패');
//       })
//   }
//   else {
//     console.log('데이터 없음');
//   }
});