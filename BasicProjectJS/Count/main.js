let count = 0;

const value = document.getElementById('value')
const btn_back = document.querySelector('.back')
const btn_next = document.querySelector('.next')
const btn_reset = document.querySelector('.reset')

btn_back.addEventListener('click', function() {

    value.textContent = count;
    count--;

})

btn_next.addEventListener('click', function() {
    value.textContent = count;
    count++;
})
btn_reset.addEventListener('click', function() {
    count = 0;
    value.textContent = count;
})