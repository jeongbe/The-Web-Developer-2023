const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    // 아직 게임을 계속 하고 있다면
    if(!isGameOver){
        player.score += 1;
        //p1Score가 winningScore와 숫자가 같지 않을때 계속 p1score 1씩 더해줌
        if(player.score === winningScore){
            //게임 끝남
            isGameOver =true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger');
            //게임 끝나면 버튼 비활성화
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click',function() {
    updateScore(p1,p2)
})

p2.button.addEventListener('click',function() {
    updateScore(p2,p1)
})
    
    //승점 변환 부분
winningScoreSelect.addEventListener('change', function () {
        //문자열을 정수로 바꾼후 넣어줌
        winningScore = parseInt(this.value);
        reset();
    })

resetButton.addEventListener('click',reset)

function reset() {
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;

    }
}