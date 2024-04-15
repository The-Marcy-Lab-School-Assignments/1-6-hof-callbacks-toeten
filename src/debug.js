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
  return [...users].sort(sortingFunction());
};

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
