const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input',function(){
    h1.innerText = `Welcome, ${input.value}`;
    if(input.value.length === 0){
        h1.innerText = 'Enter Your Username';
    }
})