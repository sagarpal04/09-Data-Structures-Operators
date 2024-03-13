'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  openingHours,
};

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capatalizeName = function (name) {
  const list = name.split(' ');
  const n = [];
  for (const word of list) {
    n.push(word.replace(word[0], word[0].toUpperCase()) + word.slice(1));
  }
  console.log(n.join(' '));
};

capatalizeName('jessica ann smith davis');
capatalizeName('jonas schmedtmann');

const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  number = String(number);
  const last = number.slice(-4);
  console.log(last.padStart(number.length, 'X'));
};

maskCreditCard(847898479834783);
maskCreditCard(8728);
maskCreditCard(121927917872);
const message1 = 'You are the great ';
console.log(message1.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(10);
planesInLine(5);
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io\n';
// const normallise = loginEmail.trim().toLowerCase();
// console.log(normallise);
// console.log(normallise === email);

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23. Boarding door 23';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r')); // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.indexOf('portugal')); // -1

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😑');
//   else {
//     console.log('You are lucky 😁');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));
// console.log(question);
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   typeof key === 'number' && console.log(`Answer ${key} : ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(answer));

// console.log(question.get(answer === question.get('correct')));

// console.log(...question);
// console.log(...question.keys());
// console.log(...question.values());
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :D');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(rest.get('open') < time && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.set([1, 2], 'test');
// console.log(rest);
// rest.delete(2);
// console.log(rest);
// // rest.clear();
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'President');
// console.log('Main');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Rissoto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('Jonas'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Rissoto');
// console.log(orderSet);
// for (const item of orderSet) console.log(item);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('Jonasschmedtmann').size);
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days : `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// for (const value of Object.values(openingHours)) {
//   console.log(value);
// }

// for (const [day, { open, close }] of Object.entries(openingHours)) {
//   console.log(day, open, close);
// }
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours?.[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }
// console.log(restaurant.order?.(0, 1) ?? "Methods doesn't exits");
// console.log(restaurant.orderRissoto?.(0, 1) ?? "Methods doesn't exits");

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu.entries()) {
//   console.log(item);
// }
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Plazza',
//   owner: 'Giovanni Rossi',
// };
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<unknown>';
// rest2.owner &&= '<unknown>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 23

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2); // 23

// console.log('---- AND ----');
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // Jonas
// console.log('Hello' && 23 && null && 'jonas'); // null
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissoto, otherFood);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i += 1) {
//     sum += number[i];
//   }
//   console.log(sum);
// };

// add(2, 3, 3, 4);
// add(1, 2);
// const array = [1, 23, 4];
// add(...array);
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mango');
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// const letter = [...str, ' ', '.S'];
// console.log(letter);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1 ?"),
//   prompt('Ingredient 2 '),
//   prompt('Ingredient 3'),
// ];
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 44, c: 66 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   openingHours: {
//     fri: { open: o, close: c },
//   },
// } = restaurant;
// console.log(o, c);
// const arr = [3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [a1, , c1] = nested;
// const [x1, y1, [z1, k1]] = nested;
// console.log(x1, y1, z1, k1);
// console.log(a1, c1);

// const [p = 1, q = 2, r = 3] = [10, 10];
// console.log(p, q, r);
