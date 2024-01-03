//데모: Promises를 사용한 fakeRequest

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

// fakeRequestPromise('sdfse.com/sef')
//     .then(() => {
//         console.log('성공');
//         //성공했을때 다른 url로
//         fakeRequestPromise('sdfsd/sdfs.com')
//             .then(() => {
//                 console.log('성공2018');
//             })
//             .catch(() => {
//                 console.log('실패2');
//             });
//     })
//     .catch(() => {
//         console.log('실패');
//     });

//! 최종 Promise

// fakeRequestPromise('sdfse.com/sef')
//     .then((data) => {
//         console.log('성공');
//         console.log(data);

//         return fakeRequestPromise('sdfsd/sdfs.com');
//     })
//     .then((data) => {
//         console.log('성공2');
//         console.log(data);
//         return fakeRequestPromise('sdfsd/sdfs2.com');
//     })
//     .then((data) => {
//         console.log('성공3');
//         console.log(data);
//         return fakeRequestPromise('sdfsd/sdfs3.com');
//     })
//     .catch((data) => {
//         console.log('실패');
//         console.log(data);
//     });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('ssss');
            }
            reject('eeeeeeerrrr');
        }, 1000);
    });
};

fakeRequest('/sdf/1')
    .then((data) => {
        console.log('성공');
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
