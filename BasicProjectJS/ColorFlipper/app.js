const colors = ["green", "red", "#808000", "f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const div = document.querySelector(".container")

btn.addEventListener('click', function() {
    let rad = Math.floor(Math.random() * 4)
    document.querySelector(".container").style.backgroundColor = colors[rad];
    color.textContent = colors[rad]
})