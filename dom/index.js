document.addEventListener('DOMContentLoaded', function() {
    var numbers = document.querySelectorAll(".number");
    numbers.forEach(function(number) {
        number.addEventListener('input', sumar);
    });
});

function addNumber() {
    var number = document.querySelector(".number");
    var newNumber = number.cloneNode(true);
    newNumber.value = "";
    newNumber.addEventListener('input', sumar);
    document.querySelector(".numbers").appendChild(newNumber);
}

function sumar() {
    var numbers = document.querySelectorAll(".number");
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var value = parseInt(numbers[i].value);
        if (!isNaN(value)) {
            sum += value;
        }
    }
    document.getElementById("resultado").innerHTML = sum;
}

function backgroungColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
