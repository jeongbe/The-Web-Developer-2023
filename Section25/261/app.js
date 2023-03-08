document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt);  //evt = 객체의 정보를 가지고 있음
})

// const input = document.querySelector('input');
// input.addEventListener('keydown',function(evt){
//     console.log(evt.key);  //키누르고 있을때 출력
//     console.log(evt.code); 
// })
// input.addEventListener('keyup',function(){
//     console.log("Keyup");  //키에서 손을 땔때 출력
// })

window.addEventListener('keydown',function(evt){
    switch (evt.code) {
        case 'ArrowUp':
            console.log("up");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
    }
});