let ulItem = document.querySelector('.ul-item');
let addItem = document.querySelector('.item-add');
let inputForm = document.querySelector('.input-form');
let allClear = document.querySelector('.clear-all');
let formElement = document.querySelector('.form-wrapper')



formElement.addEventListener('submit', function(event){
    event.preventDefault();
let inputValue = inputForm.value;
if(inputValue == ' '){
    return;
}

let li = document.createElement('li');
let deleteBtn = document.createElement('i');
deleteBtn.classList.add('fa-sharp', 'fa-solid', 'fa-trash');
deleteBtn.style.cursor = 'pointer';
deleteBtn.style.marginLeft = '10px';
li.style.listStyle = 'none';
li.style.padding = '4pxa'
deleteBtn.addEventListener('click',function(){
    li.remove();
})


li.textContent = inputValue;
ulItem.appendChild(li);
li.appendChild(deleteBtn);


inputForm.value = ' ';

});

allClear.addEventListener('click', function(){
    ulItem.innerHTML = ' ';
})
