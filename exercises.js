//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
    return x > y ? x : y;
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
    switch(language) {
        case 'German':
            return 'Guten Tag!';
        case 'English':
            return 'Hello!';
        case 'Spanish':
            return 'Hola!';
        default:
            return 'Hello!';
    }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
    return num === 5 || num === 10 ? true : false;
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
    return num < 50 && num > 20 ? true : false;
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
    return Math.floor(num) === num ? true : false;
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
    var text = '';
    text += (num % 3 === 0) ? 'fizz' : '';
    text += (num % 5 === 0) ? 'buzz' : '';
    return text === '' ? num : text;
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
    if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false; 
    if (num % 2 === 0) return (num === 2);
    var m = Math.sqrt(num);
    for (var i = 3; i <= m; i += 2) {
    if ( num % i === 0) return false;
 }
 return true;
}

function returnFirst(arr) {
  //return the first item from the array
    return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
    return arr[arr.length - 1];
}

function getArrayLength(arr) {
  //return the length of the array
    return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
    for(var i = 0; i < arr.length; i++) {
        arr[i]++;
    }
    return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
    return arr.includes(item);
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
    var sum = 0;
    for(var i in numbers) {
        sum += numbers[i];
    }
    return sum;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
    var sum = 0;
    for(var i in testScores) {
        sum += testScores[i];
    }
    return sum / testScores.length;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
    return Math.max.apply(null, numbers);
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
