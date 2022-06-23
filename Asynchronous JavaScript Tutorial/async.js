// PROMISESESESES

//1. The first thing we do is to Return a new Promise(); A promise is something that it takes some time to do. Ultimately is gonna end up in either being Resolved or Rejected.
//2. The promise takes a function as a parameter, which is where we would be making the network request.
//3. The promise function takes by design 2 parameters, resolve and reject (which are functions themeselves)

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("Some data");
    reject("Some Error");
  });
};

getSomething() // force break
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
