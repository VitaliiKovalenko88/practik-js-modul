// function checkStorage(available, ordered) {
//   // let message;
//   // Change code below this line

//   const message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

// задачки
//   // Change code above this line
//   return console.log(message);
// }
// checkStorage();
// Функция
//function formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.
//function formatMessage(message, maxLength) {}
//formatMessage("Curabitur ligula sapien", 16);
//возвращает 'Curabitur ligula...'.formatMessage("Curabitur ligula sapien", 23);
//возвращает 'Curabitur ligula sapien'.formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
//возвращает 'Nunc sed turpis...'.formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
//возвращает 'Nunc sed turpis a felis in nunc fringilla'.
// function formatMessage(message, maxLength) {
//   if (message.length > maxLength) {
//     return console.log(message.slice(0, maxLength) + "...");
//   }
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);

//вычисление наибольшего слова в масиве
// function findLongestWord(string) {
//   // Change code below this line
//   const strSplit = string.split(" ");
//   console.log(strSplit);
//   let longestWord = "";

//   console.log(longestWord);
//   for (let i = 0; i < strSplit.length; i += 1) {
//     console.log(strSplit[i].length);
//     if (strSplit[i].length > longestWord.length) {
//       longestWord = strSplit[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = 0; min <= max; i += 1) {
//     numbers.push(min);

//     min += 1;
//   }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;

// Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([1, 2, 3, 4, 5], 4);

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray = [];
// console.log(newArray);

//   for (let i = 0; i < array1.length; i += 1) {
//     // console.log(array1[i]);

//     const newArray2 = array2.includes(array1[i]);
//     if (newArray2 === true) {
//       newArray.push(array2[i]);
//     }
//   }

//   return newArray;
// }

// // Change code above this line

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// function includes(array, value) {
//   // Change code below this line
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log();

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//     console.log(apartment[key]);
//   }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   // Change code above this line
//   return console.log(propCount);
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(key);
// }
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   propCount = Object.keys(object).length;
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   return console.log(propCount);
//   // Change code above this line
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// countProps({ name: "Mango", age: 2 });
// countProps({});

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const values = Object.values(salaries);

//   for (const val of values) {
//     totalSalary += val;
//   }
//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
// countTotalSalary({});

// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Scanner");
// getProductPrice("Engine");

// 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propNames = [];
//   for (const product of products) {
//     if (product[propName]) {
//       propNames.push(product[propName]);
//     }
//   }
//   return propNames;
//   // Change code above this line
// }

// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("Engine"));

//20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//     }
//   }
//   return total;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));

// Change code below this line
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// Задачки с ментором
// Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function getKey(key, object) {
//   // for (const obj in object) {
//   //   if (obj === key) {
//   //     return true;
//   //   }
//   // }
//   // return key in object;
//   return object.hasOwnProperty(key);
// }

// console.log(getKey("name", obj));

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   // твой код
//   let total = 0;

//   for (const product of allProdcuts) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//       return total;
//     }
//   }
//   return "Такого  продукта нету";
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "йцу")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// Дано: массив, содержащий хеши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми,
// за исключением последних двух имен, которые должны быть разделены амперсандом.

// function list(array) {
//   // пиши тут свой код
// }

// // ТЕСТЫ

// console.log(
//   list([
//     { name: "Bart" },
//     { name: "Lisa" },
//     { name: "Maggie" },
//     { name: "Petya" },
//   ])
// ); // returns 'Bart, Lisa & Maggie'
// console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // returns 'Bart & Lisa'
// console.log(list([{ name: "Bart" }])); // returns 'Bart'
// console.log(list([])); // ''