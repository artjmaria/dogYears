// constant variable to store my age
const myAge = 26;

// variable that holds early years
let earlyYears = 2;

earlyYears *= 10.5;

// variable that holds laterYears
let laterYears = myAge - 2;

// to calculate # of dog yrs accounted by later yrs
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// formula to calc age in dog years
let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Maria'.toLowerCase();

// string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);