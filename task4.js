// TASK 4
function printNumbers(a, b) {
    let timerId = setInterval(
        function(){
            console.log(a);
            a++;
        }, 1000)
    setTimeout(function(){
        clearInterval(timerId);
    }, (b - a + 1) * 1000);
}

// TEST ==================================
printNumbers(5, 15);
// =======================================
