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

console.log(myDoubledNums);
// expected output: [2, 8, 18, 32]
console.log(myNums);
// expected output: [1, 4, 9, 16] unaffected!

const myFind = () => {
};

const myFilter = () => {
};

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
