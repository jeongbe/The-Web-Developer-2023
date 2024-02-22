//XMLHttpRequest 사용해보기

const req = new XMLHttpRequest();

//오류 없을때 실행됨
req.onload = function () {
    console.log('성공');
    const data = JSON.parse(this.responseText);
    console.log(data);
};

req.onerror = function () {
    console.log('에러');
    console.log(this);
};

req.open('GET', 'https://swapi.dev/api/people/1/');
req.send();

// "https://swapi.dev/api/people/1/"
