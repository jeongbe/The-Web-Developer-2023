console.log('하이');
console.log(process.argv);

//? node로 실행하면
//? $ node args.js
// 하이
// [
//   'C:\\Program Files\\nodejs\\node.exe', //! 실행할 수 있는 경로
//   'C:\\Users\\user\\Desktop\\코딩\\The-Web-Developer-2023\\Section31\\args.js'
//! 실행하고 있는 파일 경로
// ]

//? $ node args.js hello hi
// 하이
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\user\\Desktop\\코딩\\The-Web-Developer-2023\\Section31\\args.js',
//   'hello',
//   'hi'
// ]
//! 인수 전달
