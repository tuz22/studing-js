/* 캐러셀 */
let slideX = document.querySelector('.slide-container');
document.getElementsByClassName('slide-1')[0].addEventListener('click', function(){
  slideX.style.transform = `translateX(0)`;
})
document.getElementsByClassName('slide-2')[0].addEventListener('click', function(){
  slideX.style.transform = `translateX(-100vw)`;
})
document.getElementsByClassName('slide-3')[0].addEventListener('click', function(){
  slideX.style.transform = `translateX(-200vw)`;
})

let currentImg = 1;
document.getElementsByClassName('next')[0].addEventListener('click', function(){
  slideX.style.transform = `translateX(-${currentImg}00vw)`;
  currentImg += 1;
  console.log(currentImg);
  if (currentImg == 3) {currentImg = 0};
})

/* 캐러셀 스와이프 */
let startX = 0;
let moveX = 0;
let click = false;
document.getElementsByClassName('slide-box')[0].addEventListener('mousedown', function(e){ // touchstart
  startX = e.clientX; // 현재 마우스 좌표
  // 터치이벤트에선 e.touches[0].clientX;
  click = true;
});

document.getElementsByClassName('slide-box')[0].addEventListener('mousemove', function(e){ // touchmove
  if (click == true) {
    console.log(e.clientX - startX); // 움직인 거리
    moveX = e.clientX - startX
    document.getElementsByClassName('slide-container')[0].style.transform = `translateX(${moveX}px)`;
  }
});

document.getElementsByClassName('slide-box')[0].addEventListener('mouseup', function(e){ // touchend
  // 터치이벤트에선 e.changedTouches[0].clientX;
  click = false;
  console.log(moveX);

  if (moveX < -100) {
    slideX.style.transform = 'translateX(-100vw)';
    slideX.style.transition = 'all 0.5s';
  } else {
    slideX.style.transform = 'translateX(0vw)';
    slideX.style.transition = 'all 0.5s';
  }

  setTimeout(() => {
    slideX.style.transition = 'none';
  }, 500);
});