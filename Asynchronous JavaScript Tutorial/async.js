// PROMISESESESES

// 1. The first thing we do is to Return a new Promise(); A promise is something that it takes some time to do. Ultimately is gonna end up in either being Resolved or Rejected.
// 2. The promise takes a function as a parameter, which is where we would be making the network request.
// 3. The promise function takes by design 2 parameters, resolve and reject (which are functions themeselves and are built in JS)

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // This is the area where we tipically put the Network Request
//     resolve(("Some data")); // Usually we would pass here the data received from the Network Request
//     reject("Some Error");
//   });
// };

// getSomething() // This function call returns a promise, which is gonna be Resolved or Rejected (at some point). Since we are returning a Promise we have access to the .then / .catch methods
//   .then((msg) => console.log(msg)); // The .then is saying, If you pass a function as a parameter i will fire it up when/if the promise is Resolved.

const getLuke = (URL) => {
  return new Promise((resolve, reject) => {
    let req = fetch(URL);
    resolve(req);
    reject("SORRY, DIDNT WORK");
  });
};

getLuke("https://swapi.dev/api/people/1") // force break
  .then((data) => data.json())
  .then((json) => {
    console.log(json);
    return getLuke("https://swapi.dev/api/planets/2");
  })
  .then((data2) => data2.json())
  .then((json2) => console.log(json2))
  .catch((err) => console.log(err));
