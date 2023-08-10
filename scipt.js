//  Declare a function that reads a value via prompt and prints "YES" if the number is even and "NO" otherwise.
let isNumberEven = () => {
  let num = +prompt("write a number", "");
  if (num % 2 == 0) {
    alert("Yes");
  } else {
    alert("No");
  }
};
isNumberEven();

//  Create a function that takes two numbers as arguments and prints the larger one to the console.
let printBiggerNumber = () => {
  let num1 = +prompt("write first number", "");
  let num2 = +prompt("write second number", "");
  let result = num1 > num2 ? num1 : num2;
  console.log(result);
};
printBiggerNumber();

// Describe a function that takes a number and returns true if the number is even and false otherwise

let isNumberEven2 = (number) => {
  return number % 2 == 0;
};
console.log(isNumberEven2(6));

//  Describe a function that takes a number as an argument and returns an array of numbers from 0 to a specified number.
let createArraySizeN = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(createArraySizeN(5));

//Write a function that takes two numbers as arguments and returns an array of numbers from the smallest number to the largest.
let createArrayFromAtoB = (a, b) => {
  let smallest = a < b ? a : b;
  let biggest = a > b ? a : b;
  let arr1 = [];
  for (let i = smallest; i <= biggest; i++) {
    arr1.push(i);
  }
  return arr1;
};
console.log(createArrayFromAtoB(5, 13));

// Write a function that takes two numbers as arguments and returns an array of numbers with values from highest to lowest.

let createArrayFromBtoA = (a, b) => {
  let smallest1 = a < b ? a : b;
  let biggest1 = a > b ? a : b;
  let arr2 = [];
  for (let i = biggest1; i >= smallest1; i--) {
    arr2.push(i);
  }
  return arr2;
};
console.log(createArrayFromBtoA(2, 15));

// The program declares a list variable that contains an array of numbers. Using a loop, calculate the sum of the numbers and print to the console.
let countSumOfNumbersInArray = () => {
  let list = [1, 3, 7, 2, 8, 4, 32, 7, 36, 457, 3];
  let sum = 0;
  for (const n of list) {
    sum += n;
  }
  return sum;
};
console.log(countSumOfNumbersInArray());

//The program declares a list variable representing an array of positive and negative numerical values. Using a loop, print the sum of positive numbers to the console.

let countSumOfPositiveNumbersInArray = () => {
  let list = [1, 3, -7, 2, 8, 4, -32, 7, -36, -457, 3];
  let sum = 0;
  for (const n of list) {
    if (n > 0) {
      sum += n;
    }
  }
  return sum;
};
console.log(countSumOfPositiveNumbersInArray());

// The program declares a list variable that contains an array of numbers. Using a loop, calculate the difference between the sum of all even numbers and the sum of all odd numbers.

let diffEvenAndOdd = () => {
  let list = [1, 3, 7, 2, 8, 4, 32, 7, 36, 457, 3];
  let sumofEven = 0;
  let sumofOdd = 0;
  for (const n of list) {
    if (n % 2 == 0) {
      sumofEven += n;
    } else {
      sumofOdd += n;
    }
  }
  return Math.abs(sumofEven - sumofOdd);
};
console.log(diffEvenAndOdd());

// Write a function that takes an array of numbers as an argument and returns an object with the properties min, max, avg with the corresponding values in the array.

let minMaxAvg = (arr) => {
  let min = 0;
  let max = 0;
  let sum = 0;
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }
  let average = Math.round(sum / arr.length);
  return {
    min: min,
    max: max,
    avg: average,
  };
};
console.log(minMaxAvg([1, 4, 8, 3, 34, 65, -33]));

// Using a loop, print to the console the sum of numbers from the range of values from 0 to 50 multiples of 5.
let sumOfNumsDividedBy5 = () => {
  let sum = 0;
  for (let i = 0; i <= 50; i += 5) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumsDividedBy5());

// The program declares a list variable containing an array of data. Using a loop, count the sum of the values up to the first boolean value. When you reach a boolean value, stop the loop. Print the result of the sum to the console
let calculateSumBeforeBoolean = () => {
  let list = [5, 13, 2, 8, true, 10, 4, false, 6];
  let sum = 0;
  for (const value of list) {
    if (typeof value === "boolean") {
      break;
    }
    sum += value;
  }
  return sum;
};
console.log(calculateSumBeforeBoolean());

//The following tasks will use an array of objects, each describing a specific product.
let arr = [
  {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10,
  },
  {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5,
  },
  {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30,
  },
  {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20,
  },
  {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0,
  },
];

// Write a loop that displays only the product names.

for (const item of arr) {
  console.log(item.title);
}

// Write a loop that displays for each product a line with the mask “<name> (<price>)”

for (const item of arr) {
  console.log(`${item.title} (${item.price})`);
}

// Write a loop that displays for each product a string with the mask “<name> (<discount price>)”

for (const item of arr) {
  const discountedPrice = item.price * (1 - item.discount / 100);
  console.log(`${item.title} (${discountedPrice})`);
}

// Write a function that takes an array of objects as an argument and returns an object with the most expensive product (excluding discounts).

let findMostExpensiveItem = (items) => {
  let mostExpensive = items[0];
  for (const item of items) {
    if (item.price > mostExpensive.price) {
      mostExpensive = item;
    }
  }
  return mostExpensive;
};
console.log(findMostExpensiveItem(arr));

// Write code by completing the task: if the value of the object is a number (number), then its value must be doubled.


let menu = {
  width: 200,
  height: 300,
  title: "my menu",
};

for (let key in menu) {
  if (typeof menu[key] === "number") {
    menu[key] *= 2;
  }
}
console.log(menu);

// Write a function that takes 2 numbers and returns 1 if the first number is greater than the second; -1 if the first number is less than the second, and 0 if the numbers are equal.

function compareNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
console.log(compareNumbers(4, 4));

// Write a function that takes two numbers as input. If both numbers are even, the function returns their product. If both numbers are odd, the function returns their sum. If one of the numbers is even and the other is odd, the function returns that odd number.
function oddOrEven(a, b) {
  if (a % 2 == 0 && b % 2 == 0) {
    return a * b;
  }
  if (a % 2 !== 0 && b % 2 !== 0) {
    return a + b;
  }
  if (a % 2 !== 0) {
    return a;
  } else {
    return b;
  }
}
console.log(oddOrEven(5, 6));
