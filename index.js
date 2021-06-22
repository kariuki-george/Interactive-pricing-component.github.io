var slider = document.getElementById("myRange");
var output = document.getElementById("rangevalue");
const check = document.getElementById("checker")
const cash = document.getElementsByClassName("amount-cash")
const per = document.getElementsByClassName("perclass")
let value;

function checker(){return check.checked}
check.oninput = function() {
    check.checked?per[0].innerHTML = "/year": per[0].innerHTML = "/month"
    check.checked?per[1].innerHTML = "/year": per[1].innerHTML = "/month"
}

function update(amount) {
    cash[0].innerHTML = "$"+amount
    cash[1].innerHTML = "$"+amount
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    value = this.value;

    if (value < 21) {
        output.innerHTML = "10K";
        checker()?update(8*0.75*12):update(8)   
    }
    else if (value < 41 && value > 20) { 
        output.innerHTML = "50K";
        checker()?update(12*0.75*12):update(12)
    }
    else if (value < 61 && value > 40) {
        output.innerHTML = "100K";
        checker()?update(24*0.75*12):update(24)
    }
    else if (value < 81 && value > 60) {
        output.innerHTML = "500K";
        checker()?update(24*0.75*12):update(24)
    }
    else {
        output.innerHTML = "1M";
        checker()?update(36*0.75*12):update(36)
    }
}
