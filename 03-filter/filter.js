// create a randomNumbers array, containing 100 random numbers
const randomNumbers = [];
for (i = 0; i < 100; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 100) + 1;
} console.log(randomNumbers);

// create a function isPrime(number)
function isPrime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true
    }
}

// create a primeNumbers array
const primeNumbers = randomNumbers.filter(isPrime); // filter randomNumbers with isPrime(number)
console.log(primeNumbers)