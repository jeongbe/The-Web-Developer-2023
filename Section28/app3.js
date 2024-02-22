//fetch 사용해보기

//1. 1번만 요청
// "https://swapi.dev/api/people/1/"

// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log('성공', res);
//         //json()은 JSON.parse와 다름
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json', data);
//     })
//     .catch((err) => {
//         console.log('에러', err);
//     });

//2. 여러번 요청
// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log('성공', res);
//         //json()은 JSON.parse와 다름
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json', data);
//         return fetch('https://swapi.dev/api/people/2');
//     })
//     .then((res) => {
//         console.log('두번째 데이터');
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json', data);
//         // return fetch('https://swapi.dev/api/people/2');
//     })
//     .catch((err) => {
//         console.log('에러', err);
//     });

//3. async 비동기 함수
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1');
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('https://swapi.dev/api/people/2');
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log('에러', e);
    }
};

loadStarWarsPeople();
