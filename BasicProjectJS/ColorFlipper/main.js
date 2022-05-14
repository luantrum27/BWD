const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const colors = ["green", "red", "#808000", "f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const div = document.querySelector(".container")

btn.addEventListener('click', function() {
    let str = "#";
    for (let i = 1; i <= 6; i++) {
        let index = Math.floor(Math.random() * 15)
        str += hex[index]
    }
    const rand = str;

    document.querySelector(".container").style.backgroundColor = rand;
    color.textContent = rand
})