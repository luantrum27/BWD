var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');

var birding = new Image();
var hinhnenchinh = new Image();
var ongtren = new Image();
var ongduoi = new Image();


birding.src = "img/bird.png";
hinhnenchinh.src = "img/nenchinh.png";
ongtren.src = "img/ongtren.png";
ongduoi.src = "img/ongduoi.png";
// đầu tiên nạp đồ họa cho game
// tạo các biến cần thiết

var score = 0;
var khoangcachhaiong = 140; // khoang cách của hai ống theo chiều ngang
var khoangcachdenongduoi; // khoang cách hai ống theo chiều dọc
var bird = {
        x: hinhnenchinh.width / 5,
        y: hinhnenchinh.height / 2
    }
    // tạo đối tượng con chim với tọa độ ở một nửa canvas
var ong = []; // tạo mảng ống để chứa các ống di chuyển
ong[0] = {
    x: canvas.width,
    y: 0 //Khởi tạo ống đầu tiên nằm bên phải ngoài cùng và y = 0;
}

//tạo function để chạy trò chơi
function run() {
    //load hình ảnh vào
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birding, bird.x, bird.y);

    for (let i = 0; i < ong.length; i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y);
        //vẽ ống trên theo tọa độ của ống đó
        //Ống dưới phụ thuộc vào ống trên
        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= 5; //ống di chuyển

        //khi ống đến giữa nó sẽ tạo ra một ống nữa
        if (ong[i].x == canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height
            })
        }
        if (ong[i].x == 0)
            ong.splice(0, 1);
        // nếu ống đụng lề trái thì xóa đii để tránh mảng ống bị đầy 
        if (ong[i].x == bird.x) {
            score++;
        }
        if (bird.y + birding.height == canvas.height ||
            bird.x + birding.width >= ong[i].x && bird.x <= ong[i].x + ongtren.width &&
            (bird.y <= ong[i].y + ongtren.height ||
                bird.y + birding.height >= ong[i].y + khoangcachdenongduoi)) {
            return;
        }

        //điều kiện đàu tiên là đụng đất 
        //tính tọa độ y cộng với dộ cao con chim
        //điều kiện thứ hai là so sánh vị trí con chim với cái ống
        // điều kiện ba là so sánh về vị trí y

        scoreshow.innerHTML = "score: " + score;


    }

    //cho bird rơi xuống
    bird.y += 3;
    requestAnimationFrame(run);
}
//Thêm sự kiện bay lên khi nhấn
document.addEventListener("keydown", function() {
    bird.y -= 60;
});

run();