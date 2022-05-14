function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function giaiPhuongTrinh() {
    var text, text1, text2
    var x, x1, x2
    var numberA = document.getElementById('a').value
    var numberB = document.getElementById('b').value
    var numberC = document.getElementById('c').value
    console.log(numberA)
    console.log(numberB)
    console.log(numberC)
    var resultText = document.querySelector('.result-text')
    if (numberA == 0) {
        if (numberB == 0) {
            if (numberC == 0) {
                text = "Phương trình có vô số nghiệm!"
                resultText.textContent = text
                document.querySelector('.result-1').textContent = "NULL"
                document.querySelector('.result-2').textContent = "NULL"
            } else {
                text = "Phương trình vô nghiệm!"
                resultText.textContent = text
                document.querySelector('.result-1').textContent = "NULL"
                document.querySelector('.result-2').textContent = "NULL"
            }
        } else {
            text = "Phương trình có một nghiệm!"
            x = -numberC / numberB
            console.log(x)
            text1 = "X = " + Math.round(x, 2)
            document.querySelector('.result-2').style.display = 'none'
            document.querySelector('.result-1').textContent = text1
            resultText.textContent = text
        }
    } else {
        var delta = Math.pow(numberB, 2) - 4 * numberA * numberC
        console.log(delta)
        if (delta == 0) {
            text = "Phương trình có nghiệm kép!"
            resultText.textContent = text
            x = (-numberB) / (2 * numberA)
            console.log(x)
            text1 = "X = " + Math.round(x, 2)
            document.querySelector('.result-2').style.display = 'none'
            document.querySelector('.result').textContent = text1
        } else if (delta > 0) {
            text = " Phương trình có hai nghiệm phân biệt!"
            resultText.textContent = text
            x1 = ((-numberB - (Math.sqrt(delta)) / (2 * numberA)))
            x2 = ((-numberB + (Math.sqrt(delta)) / (2 * numberA)))
            console.log(x1, x2)
            text1 = "X1 = " + Math.round(x1, 2)
            text2 = "X2 = " + Math.round(x2, 2)
            document.querySelector('.result-1').style.display = 'block'
            document.querySelector('.result-2').style.display = 'block'
            document.querySelector('.result-1').textContent = text1
            document.querySelector('.result-2').textContent = text2
        } else {
            text = "Phương trình vô nghiệm!"
            resultText.textContent = text
        }
    }
}
var btnGiaiPT = document.querySelector('.btn-perform')
btnGiaiPT.addEventListener('click', function() {
    giaiPhuongTrinh()
})
var btnRandom = document.querySelector('.btn-random')
btnRandom.addEventListener('click', function() {
    var a = TaoSoNgauNhien(1, 5); //Trả về một số ngẫu nhiên từ 1 đến 9
    var b = TaoSoNgauNhien(1, 10); //Trả về một số ngẫu nhiên từ 3 đến 7
    var c = TaoSoNgauNhien(1, 3); //Trả về một số ngẫu nhiên từ 2 đến 4
    document.getElementById('a').value = a
    document.getElementById('b').value = b
    document.getElementById('c').value = c
})