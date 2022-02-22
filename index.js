let submit = document.querySelector("button[type=submit]");
let lottery = document.getElementById("lottery");
submit.addEventListener("click", () => {
    let number = document.querySelector("#number");
    number = parseInt(number.value);
    if (number > 8 || number < 1) {
        alert("Enter a number 1 to 8");
    } else {
        while (lottery.firstChild) {
            lottery.removeChild(lottery.lastChild);
        };
        for (let i = 0; i < number; i++) {
            const element = document.createElement("p");
            const hr = document.createElement("hr");
            element.innerHTML = lotterygame();
            lottery.appendChild(element);
            lottery.appendChild(hr);
        };
    };
});

const lotterygame = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        let a = Math.floor(Math.random()*90)+1;
        arr.push(a);
    };
    let numbers = arr.sort(function(a, b){return a - b}).join("-");
    let joker = Math.floor(Math.random()*90)+1;
    while (arr.includes(joker)) {
        joker = Math.floor(Math.random()*90)+1;
    };
    let superstar = Math.floor(Math.random()*90)+1;
    let output = `${numbers} | ${joker} | ${superstar}`;
    return output;
}
