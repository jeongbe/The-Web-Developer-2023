// axios 사용해보기
// axios
//     .get('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log('정보', res);
//     })
//     .catch((err) => {
//         console.log('에러', err);
//     });

//비동기 함수로 만들기
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

// getStarWarsPerson(1);

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');

//버튼 클릭할떄 마다 새로운 농담이 li로 만들어짐
const addNewJoke = async () => {
    const jokeText = await getDadJoke();

    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getDadJoke = async () => {
    try {
        //설정 추가
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (err) {
        return 'Sorry';
    }
};

btn.addEventListener('click', addNewJoke);

// getDadJoke();
