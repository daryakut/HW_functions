// Задача Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
let isNumberEven = () => {
  let num = +prompt("write a number", "");
  if (num % 2 == 0) {
    alert("Yes");
  } else {
    alert("No");
  }
};
isNumberEven();

// Задача. Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.
let printBiggerNumber = () => {
  let num1 = +prompt("write first number", "");
  let num2 = +prompt("write second number", "");
  let result = num1 > num2 ? num1 : num2;
  console.log(result);
};
printBiggerNumber();

// Задача Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае

let isNumberEven2 = (number) => {
  return number % 2 == 0;
};
console.log(isNumberEven2(6));

// Задача Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
let createArraySizeN = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(createArraySizeN(5));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
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

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

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

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

let countSumOfPositiveNumbersInArraycountSumOfNumbersInArray = () => {
  let list = [1, 3, 7, 2, 8, 4, 32, 7, 36, 457, 3];
  let sum = 0;
  for (const n of list) {
    sum += n;
  }
  return sum;
};
console.log(countSumOfNumbersInArray());

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

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

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

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

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

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

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

let sumOfNumsDividedBy5 = () => {
  let sum = 0;
  for (let i = 0; i <= 50; i += 5) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumsDividedBy5());

// В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль
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

// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар.
// Пример массива
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

// Написать цикл, который выводит только названия товаров.

for (const item of arr) {
  console.log(item.title);
}

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”

for (const item of arr) {
  console.log(`${item.title} (${item.price})`);
}

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

for (const item of arr) {
  const discountedPrice = item.price * (1 - item.discount / 100);
  console.log(`${item.title} (${discountedPrice})`);
}

// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).

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

// Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:

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

// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

function compareNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
console.log(compareNumbers(4, 4));

// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
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
