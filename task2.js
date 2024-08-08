// TASK 2
function IsPrimeNumber(p){
    /**
    * Используется малая теорема Ферма
    */
    if(typeof(p) === "number" && p <= 1000)
    {
        if(p === 0 || p === 1)
        {
            console.log(`${p} Not Prime`);
            return;
        }
        let isPrime = true;
        for(let i = 0; i < p / 2; ++i)
            {
                let n = BigInt(Math.floor(Math.random() * (p - 1) + 1));
                if(n ** (BigInt(p - 1)) % BigInt(p) != 1)
                {
                    isPrime = false;
                    break;
                }
            }
        if(isPrime)
            console.log(`${p} is Prime number`);
        else
        {
            console.log(`${p} Not Prime`);
        }
    }
    else
        console.log("Incorrect input");
}

// Test for Prime Numbers ==========================
IsPrimeNumber(227);
IsPrimeNumber(251);
IsPrimeNumber(293);
IsPrimeNumber(139);

// Test for all Numbers ============================
for(let i = 0; i < 1050; i++)
    {
        IsPrimeNumber(i);
    }
// =================================================
