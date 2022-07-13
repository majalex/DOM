let par1 = document.getElementById('par1');
let par2 = document.getElementById('par2');
let button = document.getElementById("button");

function setBackground() {
    par1.setAttribute('style', 'background-color:red');
    par2.setAttribute('style', 'background-color:yellow');
};

button.addEventListener("click", setBackground);