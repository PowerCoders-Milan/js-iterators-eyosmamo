
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// use .map to get the first letter of every animal name in the arrray animalsc
const secretMessage = animals.map(firstLetter => {
    return firstLetter[0]
});

console.log(secretMessage);
var firstLetterjoin = secretMessage.join(``);
console.log(firstLetterjoin);


// Create the smallNumbers array below with map

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumbers => {
    return bigNumbers / 100;
});
console.log(smallNumbers);