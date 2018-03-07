const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randNum = Math.random();
    if (randNum <= 0.5) {
      resolve({
        name: 'Felix',
        age: 38
      });
    } else {
      reject('I need some data to continue!');
    }
  }, 2000);
});

promise
  .then((data) => {
    console.log(`${data.name} is ${data.age} years old.`);
    console.log('After then-callback');
  })
  .catch((error) => {
    console.log('Error: ' + error);
    console.log('After catch-callback');
  });

console.log('Before then-callback');