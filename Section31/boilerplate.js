const fs = require('node:fs');
// console.log(fs);
const folderName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, 'sdfsdfsffff');
    fs.writeFileSync(`${folderName}/app.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
} catch (e) {
    console.log('에러 발생이요');
}

//*비동기 메서드
//! 실행하면 Dogs 라는파일이 생성이 된다.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if (err) throw err;
// });
// //비동기 방식이기 때문에 밑에 콘솔이 먼저 찍힘
// console.log('I Come after mkdir');

//* 동기 메서드
// fs.mkdirSync('Cats');
// console.log('I Come after mkdir in the file');

//* 확장자 명 mjs로 수정하면 됨
// import { mkdir } from 'node:fs';

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir('./tmp/a/apple', { recursive: true }, (err) => {
//     if (err) throw err;
// });

//! 비동기에는 콜백 함수가 있고 동기에는 콜백 함수가 없다.
