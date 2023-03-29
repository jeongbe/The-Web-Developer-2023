const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click',function(e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();  //이벤트가 더이상 버블링하지 않도록 막아줌
})

container.addEventListener('click',function() {
    container.classList.toggle('hide');
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}