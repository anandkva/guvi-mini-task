const display = (val) => {
    let screen = document.getElementById("result")
    screen.value += val
};
const solve = () => {
    let screen = document.getElementById("result")
    try {
        let x = screen.value
        if (x == "") {
            screen.value = "0"
        } else {
            let y = eval(x)
            screen.value = y
        }
    }
    catch (err) {
        screen.value = err
    }
};
const clr = () => {
    document.getElementById("result").value = ""
};
const del = () => {
    document.getElementById("result").value = screen.value.slice(0, -1)
};
const validate = (evt) => {
    let theEvent = evt || window.event;
    if (theEvent) {
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9 \+ \- /* ]|\./;
    if (!regex.test(key) && theEvent.keyCode !== 13) {
        alret()
        theEvent.returnValue = false;       
    } 
    if(theEvent.keyCode == 13){
        solve()
    }
}

const alret = () =>{
    alert("Please enter number value.");
}

