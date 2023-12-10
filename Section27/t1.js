//setTimeout 함수사용해보기

console.log('1 text');
setTimeout(() => {
    console.log('2 text');
}, 3000);

console.log('3 text');

let text = document.querySelector('.t1');
let btn = document.querySelector('.btn');

btn.onclick = function () {
    setTimeout(() => {
        text.style.display = 'block';
    }, 2000);
};

function multiply(x, y) {
    console.log(x * y);
}
setTimeout(multiply, 2000, 4, 3);
