/* tab */
let tabBtns = document.querySelectorAll('.tab-button');
let tabContents = document.querySelectorAll('.tab-content');
console.log(tabBtns.length);

for (let i = 0; i < tabBtns.length; i++){
  tabBtns[i].addEventListener('click', function(){
    console.log(i+'번눌림')
    document.querySelector('.orange').classList.remove('orange');
    tabBtns[i].classList.add('orange');
  
    document.querySelector('.show').classList.remove('show');
    tabContents[i].classList.add('show');
  });
}



