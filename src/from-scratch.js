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

const nameHasZ = myFind(myNames, (name) => name.includes('Z'));
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
console.log(namesWithB); // ['Bob', 'Barry']

const namesWithZ = myFilter(myNames, (name) => name.includes('Z'));
console.log(namesWithZ); // []
const sortWords = () => {
};

const sortNumbers = () => {
};

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
