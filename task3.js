// TASK 3 
function sum(number1) {
    return function(number2){
        return (number1 + number2);
    }
}

// Test ============================================
const sumFunc = sum(17);
console.log(sumFunc(7));
// =================================================
