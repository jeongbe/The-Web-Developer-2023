const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout!');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delqy = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delqy > 4000) {
                reject('Connection Timeout!'); //실패
            } else {
                resolve(`Jere is your fake data from ${url}`); //성공
            }
        }, delqy);
    });
};

fakeRequestCallback(
    'books.com/page1',
    function (response) {
        console.log('작동된다.');
        console.log(response);
        fakeRequestCallback(
            'books.com/page2',
            function (response) {
                console.log('잘 작동된다.');
                console.log(response);
            },
            function (err) {
                console.log('에러발생!');
                console.log(err);
            }
        );
    },
    function (err) {
        console.log('에러!');
        console.log(err);
    }
);
