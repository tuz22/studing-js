/* 네비게이션 */
document.querySelector('.navbar-toggler').addEventListener('click', function(){
  document.querySelectorAll('.list-group')[0].classList.toggle('show');
})

/* 모달 창 */
let blackBg = document.querySelector('.black-bg');
document.querySelector('#login').addEventListener('click', function(){
  blackBg.classList.add('show-modal');
})

document.querySelector('#close').addEventListener('click', function(){
  blackBg.classList.remove('show-modal');
})

/* 이벤트 관련 함수들 */
blackBg.addEventListener('click', function(e){

  // e.target; // 사용자가 실제로 클릭한 것
  // e.currentTarget; // 이벤트리스너가 달린 곳 == this;
  // e.preventDefault; // 이벤트의 기본동작을 막아줌 ex) 클릭 안된 것처럼
  // e.stopPropagation(); // 내 상위요소로 이벤트 버블링을 막아줌

  console.log("e:"+e.target);
  console.log(blackBg);

  if (e.target == blackBg) {
    blackBg.classList.remove('show-modal');
  }
  
});

/* 로그인 및 유효성체크 */
document.querySelector('form').addEventListener('submit', function(e){
  let id = document.getElementById('idForm').value;
  let pw = document.getElementById('pwForm').value;
  let idCheck = /^[a-z]+[a-z0-9]{5,9}$/g;
  let pwCheck = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  if (id == '') {
    alert('아이디를 입력하세요.');
    e.preventDefault();
  } else if (!idCheck.test(id)) {
    alert('영문 또는 숫자 6 ~ 10자리를 입력해주세요.')
  } else if (pw == '') {
    alert('비밀번호를 입력하세요.');
    e.preventDefault();
  } else if (!pwCheck.test(pw)) {
    alert('영문, 숫자, 특수문자를 최소 한가지씩 입력해주세요.');
    e.preventDefault();
  }
})

/* 다크모드 */
let count = 0;
document.getElementById('darkmode').addEventListener('click', function() {
  count++;
  console.log(count);
  if(count % 2 == 1) {
    document.getElementById('darkmode').innerHTML = 'Light 🔄';
    document.querySelector('body').classList.add('dark');
    document.getElementById('darkmode').classList.add('bg-white');
    document.getElementById('darkmode').style.color = 'black';
  } else {
    document.getElementById('darkmode').innerHTML = 'Dark 🔄';
    document.querySelector('body').classList.remove('dark');
    document.getElementById('darkmode').classList.remove('bg-white');
    document.getElementById('darkmode').style.color = 'white';
  }
})

/* 사음품 베너 */
setTimeout(function() {
  document.getElementsByClassName('alert')[0].style.opacity = "1";
}, 1000)
// setInterval(function() {
//   document.getElementsByClassName('alert')[0].style.visibility = "visible";
// }, 1000)

/* 스크롤 이벤트 */
document.querySelector('.terms').addEventListener('scroll', function(){
  // div박스의 스크롤바 높이 == div박스의 스크롤바를 내린 양 + div박스 높이
  let height = document.querySelector('.terms').scrollHeight; // 실제 높이
  let scroll = document.querySelector('.terms').scrollTop; // 위에서 내린 양
  let divBoxH = document.querySelector('.terms').clientHeight; // div박스 높이

  if (scroll + divBoxH == height) {
    alert('약관 다 읽음');
  }
});

window.addEventListener('scroll', function(){
  if (window.scrollY >= 100) {
    document.querySelector('.navbar-brand').style.fontSize = 20 + 'px';
  } else {
    document.querySelector('.navbar-brand').style.fontSize = 30 + 'px';
  }
})

/* 스크롤 진척도 표시 */
window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY;
  let scrollHeight = document.querySelector('html').scrollHeight - document.querySelector('html').clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;

  document.querySelector('.bar').style.width = progress + '%';
});

window.scrollY // == document.querySelector('html').scrollTop; 현재 웹페이지 스크롤 양
document.querySelector('html').scrollHeight; // 현재 웹페이지 실제 높이
document.querySelector('html').clientHeight; // 현재 보고있는 웹페이지 높이