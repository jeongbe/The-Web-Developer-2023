const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(event) {
    event.preventDefault(); //메서드 (페이지가 넘어가는 것을 방지)
    
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = (tweetForm.elements.username);
    const tweetInput  = (tweetForm.elements.tweet);
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = ''; //리셋
    tweetInput.value = ''; //리셋

})
const addTweet = (username, tweet) => {
    const newtweet = document.createElement('li'); //빈 li 생성
    const bTag = document.createElement('b');  //bold 태그 생성
    bTag.append(username);  
    newtweet.append(bTag);
    newtweet.append(`-${tweet}`);
    // console.log(newtweet);
    tweetsContainer.append(newtweet);

    // console.log('submit');
}
