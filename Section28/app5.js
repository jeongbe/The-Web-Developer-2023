const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // dir 객체의 구조를 트리로 펼쳐서 보여줌
    // console.dir(form.elements.query.value);

    //input 안에 값
    const searchTerm = form.elements.query.value;
    //파라미터 따로 confing로 만들어서 사용 ?뒤에 쿼리 부분
    //쿼리 문자열
    const config = { params: { q: searchTerm, isFunny: 'colt' } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    deleteImages();
    // console.log(res.data[0].show.image.medium);

    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};

const deleteImages = () => {
    const imgs = document.querySelectorAll('img');
    // console.log(imgs);
    imgs.forEach((img) => img.remove());
};
