const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click',function() {
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    // const newColor = `rgb(${r}, ${g}, ${b})`;
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    let sum = r + g + b;
    if(sum < 100){
        h1.style.color = 'rgb(255, 255, 255)';
    }else{
        h1.style.color = 'rgb(0, 0, 0)';
    }
    return `rgb(${r}, ${g}, ${b})`;

    
}