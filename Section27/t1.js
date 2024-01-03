//setTimeout 함수사용해보기

// console.log('1 text');
setTimeout(() => {
    // console.log('2 text');
}, 3000);

// console.log('3 text');

let text = document.querySelector('.t1');
let btn = document.querySelector('.btn');

btn.onclick = function () {
    setTimeout(() => {
        text.style.display = 'block';
    }, 2000);
};

function multiply(x, y) {
    // console.log(x * y);
}
setTimeout(multiply, 2000, 4, 3);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000);
//     }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext(); //call back
//     }, delay);
// };

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {});
//         });
//     });
// });

// searchMoviesAPI(
//     'amadeus',
//     () => {
//         saveToMyDB(
//             movies,
//             () => {
//                 //실행 잘 됬을때
//             },
//             () => {
//                 //실행 실패 했을때
//             }
//         );
//     },
//     () => {
//         //API가 멈추거나 요청이 실해했을 경우
//     }
// );

//색변하는
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000));

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
}

// rainbow().then(() => console.log('끝'));

async function end() {
    await rainbow();
    console.log('끝');
}

end();
