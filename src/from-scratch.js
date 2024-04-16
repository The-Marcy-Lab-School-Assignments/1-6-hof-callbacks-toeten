const myForEach = (arr, callback) => {
  for (let i of arr) {
    callback(i)
  }
}
const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
//const result = myForEach(myNames, (name) => console.log(`Hi, ${name}!`));
/* That will log */
// Hi, Alice!
// Hi, Bob!
// Hi, Charlie!
// Hi, Debbie!

//console.log(result); // undefined
//console.log(myNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']

const myMap = (arr, callback) => {
  let copy = [...arr]
  for (let i = 0; i < arr.length; i++) {
    copy[i] = callback(copy[i]);
  }
  return copy
}
const myNums = [1, 4, 9, 16];
const myDoubledNums = myMap(myNums, (x) => x * 2);

//console.log(myDoubledNums);
// expected output: [2, 8, 18, 32]
//console.log(myNums);
// expected output: [1, 4, 9, 16] unaffected!

const myFind = (arr, callback) => {
  let copy = [...arr];
  for (let i = 0; i < copy.length; i++) {
    if (callback(copy[i])) {
      return arr[i]
    }
  }
  return;
};

const myNames2 = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
const nameHasB = myFind(myNames2, (name) => name.includes('B'));
//console.log(nameHasB); // 'Bob' not 'Barry' because 'Bob' is first

const nameHasZ = myFind(myNames2, (name) => name.includes('Z'));
//console.log(nameHasZ); // undefined

const myFilter = (arr, callback) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr;
};
const myNames3 = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
const namesWithB = myFilter(myNames3, (name) => name.includes('B'));
//console.log(namesWithB); // ['Bob', 'Barry']

const namesWithZ = myFilter(myNames3, (name) => name.includes('Z'));
//console.log(namesWithZ); // []

const sortWords = (arr) => {
  let copy = [...arr]
  return copy.sort()
  //remember: alphabetical sorting is default for .sort()
  //you dont need to write a callback in the ()
};
const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
const sortedNames = sortWords(unsortedNames);

//console.log(sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']
//console.log(unsortedNames); // ['Charlie', 'Debbie', 'Alice', 'Bob']

const sortNumbers = (arr) => {
  let copy = [...arr]
  return copy.sort((a, b) => a - b)
  //here we do need the call back inside
};
const unsortedNums = [1, 100, 14, 3, 2, 11];
const sortedNums = sortNumbers(unsortedNums);

//console.log(sortedNums); // [1, 2, 3, 11, 14, 100]
//console.log(unsortedNums); // [1, 100, 14, 3, 2, 11]

const sortNumbersBetter = (arr, isDescending = false) => {
  let copy = [...arr];
  return copy.sort((a, b) => isDescending ? b - a : a - b)
};
const unsortedNums2 = [1, 100, 14, 3, 2, 11];
const bigToSmall = sortNumbersBetter(unsortedNums2, true);
console.log(bigToSmall); // [100, 14, 11, 3, 2, 1]

const smallToBig = sortNumbersBetter(unsortedNums2); // default param
console.log(smallToBig); // [1, 2, 3, 11, 14, 100]


/*const sortNumbersBetter = (arr, isDescending = false) => {
  let copy = [...arr];
  return copy.sort((a, b) => {
    if (isDescending) {
      return b - a; // For descending order, swap a and b
    } else {
      return a - b; // For ascending order, use the default
    }
  });
};    made shorter by using ternary operator. */

const sortUsersByOrder = (arr) => {
  let copy = [...arr];
  return copy.sort((or1, or2) =>
    (or1.order > or2.order) ? 1 : (or1.order < or2.order) ? -1 : 0)
};

const users = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedUsers = sortUsersByOrder(users);
//console.log(sortedUsers);
// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]



const sortUsersByName = (arr) => {
  let copy = [...arr];
  return copy.sort((name1, name2) =>
    (name1.name > name2.name) ? 1 : (name1.name < name2.name) ? -1 : 0)
};
const users1 = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedNames2 = sortUsersByName(users);
console.log(sortedNames2);




module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
