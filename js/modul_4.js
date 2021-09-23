// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name + 5}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

//4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const isPizza = this.pizzas.includes(pizzaName);

//     if (!isPizza) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     if (isPizza) {
//       return onSuccess(pizzaName);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number += value;
//     }
//     newNumbers.push(number);
//   });
//   console.log(newNumbers);
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }
// changeEven([17, 24, 68, 31, 42], 100);

//14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => {
//   return planet.length;
// });
// console.log(planets);
// console.log(planetsLengths);

//21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

//24
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

//25
// const getFriends = (users) => {
//   return users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Change code above this line

// console.log(getFriends(users));

//28
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// // const bookWithTitle = books.filter(({ title }) => title === BOOK_TITLE);
// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({ author }) => author === AUTHOR);

// console.table(books);
// console.dir(bookWithTitle);
// console.log(bookByAuthor);

//29
// const getUserWithEmail = (users, mail) => {
//   return users.find(({ email }) => email === mail);
// };

// getUserWithEmail(users, "shereeanthony@kog.com");
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

//31
