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
