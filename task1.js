// TASK 1
function OddEvenArrayCheck(arr) {
    let oddCount = 0;
    let evenCount = 0;
    let zeroCount = 0;

    for(let i = 0; i < arr.length; ++i){
        if(typeof(arr[i]) === "number"){
            if(arr[i] == 0)
                zeroCount++;
            else if(arr[i] % 2 == 0)
                evenCount++;
            else
                oddCount++;
        }
    }
    
    if (zeroCount > 0)
        console.log("zeroCount: " + zeroCount);
    console.log("Even: " + evenCount);
    console.log("Odd: " + oddCount);
}

// Odd Even test ===============================
let testArr = [1, 2, 22, 3, 5, null, undefined, Symbol(), 87, 72, 0];
OddEvenArrayCheck(testArr);
// =============================================