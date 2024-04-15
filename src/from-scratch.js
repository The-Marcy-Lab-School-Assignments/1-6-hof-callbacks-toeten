const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
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
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
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

console.log(sortedNums); // [1, 2, 3, 11, 14, 100]
console.log(unsortedNums); // [1, 100, 14, 3, 2, 11]

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
};

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
