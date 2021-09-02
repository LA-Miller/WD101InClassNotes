/* 
ex:
    let array = [value, value, value];
index position:    0      1      2
*/

let arr = ['first value', 'second value', 'third value'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// .length wth an array: 
console.log(arr.length);
console.log(arr[arr.length - 1]);

// Using an array constructor, uses 'new' keyword
let test = new Array();
console.log(test);
console.log(test.length);

// Created an array w/ 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);
// we targeted a specific index/key, we 'assigned' it a proper value
test2[0] = 'new value';
console.log(test2);

// Initializing an array with values
let nums = Array(1, 2, 3, 4, 5)
console.log(nums);   
// console.log(typeof nums);    arrays are technically objects, placeholders are like keys

let array2 = Array('array1', 'array2', 'array3 string');
console.log(array2);
console.log(array2[2]);

// ****** METHODS **********
// Methods are a way to pull out and/or manipulate the data within our arrays.       

// forEach(), method runs a function over each index of the array
let boardGames = [ 'Scrabble', 'Chess', 'Monopoly', 'DnD', 'Clue' ];

for(i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
};

// Concise body arrow function
boardGames.forEach(game => console.log(`Concise: ${game}`));
// boardGames.forEach(game => console.log(typeof game));

// block body arrow function
boardGames.forEach(game => {
    console.log(`Block: ${game}`)
});

// Anonymous Function
boardGames.forEach(function(game) {
    console.log(`Anon: ${game}`);
})

// Various other methods:
// Array.length -> returns the number of elements in the array
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.length);

// Array.push() -> adds an element to the end of the array
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
ShoppingList.push('mint');
console.log(ShoppingList);

// Array.pop() -> removes the last element of the array and returns that element
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
ShoppingList.pop();
console.log(ShoppingList);

// Array.unshift() -> adds a new element at the beginning of the array
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
ShoppingList.unshift('salt');
console.log(ShoppingList);

// Array.shift() -> removes the first element in the array, and returns that element
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
let celery = ShoppingList.shift();
console.log(ShoppingList);
console.log(celery);

// Array.map() -> transforms the elements in the original array by calling the given function once for each item or element in the array
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.map(item => item.toUpperCase()));

// Array.filter() -> creates a new array with only the elements that pass the test in a given function
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.filter(item => item.startsWith('l'))); //only show items that start with 'l'

// Array.find() -> return the first element in the array that passed a test given as a function
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.find(item => item.startsWith('l')));

// Array.reduce() -> executes a given function for each value of the array and returns a single value
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total+cost));

// Array.includes() -> determines whether an array has a specific element, returns boolean value
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.includes('limes'));
console.log(ShoppingList.includes('salt'));

// Array.indexOf() -> search the array for a specific element and returns it's first index. Returns -1 when element is not found.
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.indexOf('lemon'));
console.log(ShoppingList.indexOf('peanuts'));

// Array.findIndex() -> returns the index of the first element in an array that passes the test given in a function
// Returns -1 when element is not found.
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.findIndex(item => item.startsWith('g')));

// Array.every() -> checks if all elements in an array pass a test given as a function. If there is
// one element that returns a false value, the function returns false and does not check the rest of the elements.
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.every(item => item.length > 1));

// Array.concat() -> merge two or more arrays, and returns a new array
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];
console.log(ShoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, and returns a new array. it selects the elements starting at the provided
// start argument, and ends at, but does *not* include, the provided end argument.
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.slice(1, 3));

// Array.splice() -> add/removes elements in an array, and returns the new elements. First argument takes in an integer
// that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed.
// Optional third argument takes in the new elements to be added to the array. 
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
ShoppingList.splice(2, 1);
console.log(ShoppingList);

ShoppingList.splice(2, 1, 'cherries');
console.log(ShoppingList);

// Array.sort() -> sorts the items in an array. The sort order can be either alphabetic or numeric, and either ascending, or descending.
// BY default, sort() orders the values as strings in alphabetical and ascending order. Can tae in a compare function which indicates
// if you want to sort by ascending or descending order
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.sort());

let costs = [3, 2, 13, 4];
// want to sort by descending order
console.log(costs.sort((a,b) => b-a));
// want to sort by ascending order
console.log(costs.sort((a,b) => a-b));

// Array.reverse() -> reverse the order of elements in an array
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.reverse());

// Array.toString() -> converts an array into a string
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.toString());

// Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicates
// how the elements will be separated. Default separator is a comma. 
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(ShoppingList.join("! and "));
console.log(ShoppingList.join("->"));

// Lastly, an ES6 feature: the spread operator. The spread operator, is indicated by these three dots "..." expands the contents of
// the array, and takes it out of the array structure.
let ShoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(...ShoppingList);