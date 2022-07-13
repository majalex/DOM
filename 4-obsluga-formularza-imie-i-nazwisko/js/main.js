
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');


function callback(event) {
    event.preventDefault();
    console.log(fname.value, lname.value);
};

submit.addEventListener("click", callback);

