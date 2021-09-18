const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

//№20
// const getUsersWithFriend = (users, friendName) => {
//   const usersName = users.filter(({ friends }) => friends.includes(friendName));
//   console.log(usersName);
//   return usersName;
// };
// getUsersWithFriend(users, "Goldie Gentry");

//№21
// const getFriends = (users) => {
//   const userFriends = users.flatMap(({ friends }) => friends);

//   const unicFriends = userFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return unicFriends;
// };

// console.log(getFriends(users));

//№22
// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(({ isActive }) => isActive === true);

//   return activeUsers;
// };

// console.table(getActiveUsers(users));

//№23
// const getInactiveUsers = (users) => {
//   const inactiveUser = users.filter(({ isActive }) => isActive === false);
//   return inactiveUser;
// };

// console.table(getInactiveUsers(users));

//№24

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookByAuthor);

//№25
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

//№26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((even) => even % 2 === 0);
// console.log(eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every((odd) => odd % 2 !== 0);
// console.log(eachElementInFirstIsOdd);
// const eachElementInSecondIsEven = secondArray.every((even) => even % 2 === 0);
// console.log(eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every((odd) => odd % 2 !== 0);
// console.log(eachElementInSecondIsOdd);
// const eachElementInThirdIsEven = thirdArray.every((even) => even % 2 === 0);
// console.log(eachElementInThirdIsEven);
// const eachElementInThirdIsOdd = thirdArray.every((odd) => odd % 2 !== 0);
// console.log(eachElementInThirdIsOdd);

//№27
// const isEveryUserActive = (users) => users.every(({ isActive }) => isActive);
// console.log(isEveryUserActive(users));

//№28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((even) => even % 2 === 0);
// console.log(anyElementInFirstIsEven);
// const anyElementInFirstIsOdd = firstArray.some((odd) => odd % 2 !== 0);
// console.log(anyElementInFirstIsOdd);
// const anyElementInSecondIsEven = secondArray.some((even) => even % 2 === 0);
// console.log(anyElementInSecondIsEven);
// const anyElementInSecondIsOdd = secondArray.some((odd) => odd % 2 !== 0);
// console.log(anyElementInSecondIsOdd);
// const anyElementInThirdIsEven = thirdArray.some((even) => even % 2 === 0);
// console.log(anyElementInThirdIsEven);
// const anyElementInThirdIsOdd = thirdArray.some((odd) => odd % 2 !== 0);
// console.log(anyElementInThirdIsOdd);

// №29
// const isAnyUserActive = (users) => users.some(({ isActive }) => isActive);
// console.log(isAnyUserActive(users));

// №30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
// }, 0);
// console.log(totalPlayTime);
// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// // №31
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре
// для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его время
// (свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return player.playtime / player.gamesPlayed + total;
// }, 0);

// console.table(totalAveragePlaytimePerGame);

// №32
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и
// возвращала сумму всех средств(свойство balance) которые хранят пользователи
// из массива users.

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, { balance }) => {
//     return total + balance;
//   }, 0);
// };

// console.log(calculateTotalBalance(users));

// №33
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и
// возвращала общее количество друзей(свойство friends) всех пользователей из
// массива users.

// const getTotalFriendCount = (users) => {
//   return users.reduce((total, { friends }) => {

//     return total + friends.length;
//   }, 0);
// };

// console.log(getTotalFriendCount(users));

// №34
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась
// отсортированная по возрастанию копия массива releaseDates, а в переменной
// alphabeticalAuthors копия массива имён авторов authors отсортированная в по
// алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
// ];

// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(releaseDates);
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(authors);
// console.log(alphabeticalAuthors);

// №35
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате
// издания, по её возрастанию или убыванию.Дополни код так, чтобы в
// переменной ascendingReleaseDates получилась отсортированная по
// возрастанию копия массива releaseDates, а в переменной
// descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort(
//   (firstDate, nextDay) => firstDate - nextDay
// );
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort(
//   (firstDate, nextDay) => nextDay - firstDate
// );
// console.log(descendingReleaseDates);

// №36
// Онлайн бибилиотеке необходимо отображать книги отсортированные по
// автору, в алфавитном и обратном алфавитном порядке.Дополни код так,
//   чтобы в переменной authorsInAlphabetOrder получилась отсортированная
// фавиту копия массива authors, а в переменной authorsInReversedOrder
// копия отсортированная в обратном алфавитном порядке.

// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
//   "Говард Лавкрафт",
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);

// №37
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstEl, secondEl) =>
//   firstEl.author.localeCompare(secondEl.author)
// );
// console.table(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstEl, secondEl) =>
//   secondEl.author.localeCompare(firstEl.author)
// );
// console.table(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort(
//   (firstEl, secondEl) => firstEl.rating - secondEl.rating
// );
// console.table(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort(
//   (firstEl, secondEl) => secondEl.rating - firstEl.rating
// );
// console.table(sortedByDescentingRating);

// №38
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив
//пользователей отсортированный по возрастанию их баланса(свойство balance).

// const sortByAscendingBalance = ([...users]) =>
//   users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// console.table(sortByAscendingBalance(users));

// // №39
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она
// возвращала массив пользователей отсортированный по убыванию количества
// их друзей(свойство friends).

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort(
//     (firstFriend, secondFriend) =>
//       secondFriend.friends.length - firstFriend.friends.length
//   );
// };
// console.table(sortByDescendingFriendCount(users));

// №40
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
// отсортированный по их имени(свойство name) в алфавитном порядке.

// const sortByName = (users) =>
//   [...users].sort((firstName, secondName) =>
//     firstName.name.localeCompare(secondName.name)
//   );
// console.table(sortByName(users));

// №41
// Дополни код так, чтобы в переменной names получился массив имён авторов в
// алфавитном порядке, рейтинг книг которых больше значения переменной
// MIN_BOOK_RATING.

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map(({ author }) => author);
// console.table(names);

// №42
//Дополни функцию getNamesSortedByFriendCount(users) так, чтобы
//она возвращала массив имён пользователей отсортированный по
//возрастанию количества их друзей (свойство friends).

// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// console.table(getNamesSortedByFriendCount(users));
// const usersNew = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// №43
//Дополни функцию getSortedFriends(users) так, чтобы она
//возвращала массив уникальных имён друзей (свойство friends)
//отсортированный по алфавиту.

// const getSortedFriends = (users) =>
//   users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// console.table(getSortedFriends(usersNew));
// №44
// Дополни функцию getTotalBalanceByGender(users, gender) так,
// чтобы она возвращала общий баланс пользователей(свойство balance),
// пол которых(свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((total, { balance }) => total + balance, 0);
// console.log(getTotalBalanceByGender(users, "female"));
const getActiveUsers = (users) => users.filter((user) => user.isActive);
console.log(getActiveUsers(users));
