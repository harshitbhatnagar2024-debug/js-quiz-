
let value = 1;
const count = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

function update(){
    count.innerText = value;

    if(value == 0){
        dec.disabled = true;
    } else {
        dec.disabled = false;
    }

    if(value == 10){
        inc.disabled = true;
    } else {
        inc.disabled = false;
    }
}

function increase(){
    if(value < 10){
        value++;
        update();
    }
}

function decrease(){
    if(value > 0){
        value--;
        update();
    }
}

update();
