const input = document.querySelector('input');
const h1 = document.querySelector('h1');

//변경 이벤트는 입력을 블러 아웃(blur out)할 때만 작동
// input.addEventListener('change', function(){
//     console.log("ok"); //change -> 타이핑하고 떠날때
// })
input.addEventListener('input', function(){
    // console.log("okk"); //input -> 타이핑 즉시 출력
    h1.innerText = input.value;
})