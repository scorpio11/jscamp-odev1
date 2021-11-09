function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let prime = true;
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                prime = false;
            }
        }
        if (prime) {
            console.log(numbers[i] + " is prime number");
        }
        else {
            console.log(numbers[i] + " is not prime number");
        }
    }
}

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);
console.log("-------")
function friendNumbers(num1, num2) {
    let sum1 = 0, sum2 = 0;
    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            sum1 = sum1 + i;
        }
    }
    for (let j = 1; j < num1; j++) {
        if (num2 % j == 0) {
            sum2 = sum2 + j;
        }
    }
    if (sum1 == sum2) {
        console.log(sum1 + " and " + sum2 + " are friend numbers");
    }
    else {
        console.log(sum1 + " and " + sum2 + " are not friend numbers");
    }
}
console.log("-------")
friendNumbers(112, 120);

function perfectNumber() {
    for (let i = 1; i < 1000; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                sum += j;
            }
        }
        if (sum == i) {
            console.log(i + " is perfect number");
        }
    }
}
console.log("-------")
perfectNumber();

function primeNumber() {
    for (let i = 1; i < 1000; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i + " is prime number");
        }
    }
}

console.log("-------")
primeNumber();