// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const listContainer = document.querySelector('#list')

form.addEventListener('submit',function(event){
    event.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addlist(productInput.value, qty.value);
    productInput.value = '';
    qtyInput.value = '';
})

const addlist = (product,qty) =>{
    const newlist = document.createElement('li');
    list.appendChild(newlist);
    newlist.innerText = `${product} ${qty}`;
}