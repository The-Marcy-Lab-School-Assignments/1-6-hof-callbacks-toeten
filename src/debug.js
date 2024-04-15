const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

/* i tried:
const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (callback(value)) return true;
  }
  return false;
};
and it didn't work CAUSE the function just ends right when it
finds a value that meets the first condition without going through
the rest of the values in the array */


const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction)
};
//just remove the (); 
/*remember: functions are first class citizens
which means they can be passed as arguments to other functions 
just like any other value, such as strings or numbers. 
when you pass a function as an argument to another function, 
you're passing a reference to that function. */


const logEachName = (names) => {
  return names.forEach(console.log());
};

const logEachUserBio = (users) => {
  return users.forEach(console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
