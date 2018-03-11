import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('Element has been deleted.');
//   console.log(snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Element has been updated.');
//   console.log(snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Element has been added.');
//   console.log(snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => console.log('Error fetching expenses. ', e));

// const expenses = [];

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//   })
//   .catch((e) => console.log('Error fetching expenses. ', e));

// console.log(expenses);


// const expenses = [{
//   description: 'Groceries',
//   note: 'weekly shooping',
//   amount: 7434,
//   createdAt: 0
// }, {
//   description: 'Rent',
//   note: 'March rent',
//   amount: 37200,
//   createdAt: 1000
// }, {
//   description: 'gift',
//   note: 'little thankyou for Sebastian',
//   amount: 950,
//   createdAt: 1500
// }];

// expenses.map((expense) => database.ref('expenses').push(expense));

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const job = snapshot.val().job.title;
//   const company = snapshot.val().job.company;
//   console.log(`${name} is a ${job} and works ${company === 'self-employed' ? '' : 'at '}${company}.`);
// }, (e) => {
//   console.log('Was not able to fetch data. ', e);
// });

// setTimeout(() => {
//   database.ref('job').set({
//     title: 'Flight Attendant',
//     company: 'Lufthansa'
//   });
// }, 2000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data. ', e);
// });

// setTimeout(() => {
//   database.ref().update({
//     age: 39,
//     'location/city': 'Berlin'
//   });
// }, 2000);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 4000);

// setTimeout(() => {
//   database.ref('age').set(38);
// }, 6000);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Value wasn't retrieved. " + e);
//   });

// database.ref().set({
//   name: 'Felix',
//   age: 38,
//   job: {
//     title: 'Flight attendant',
//     company: 'Lufthansa'
//   },
//   isSingle: true,
//   location: {
//     city: 'Berlin',
//     zip: '10551',
//     country: 'Germany'
//   }
// }).then(() => {
//   console.log('Updated successfully.');
// }).catch((e) => {
//   console.log('Update failed. ' + e);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle has been deleted.');
//   })
//   .catch((error) => {
//     console.log('Failure! ' + error);
//   });

// database.ref().
//   update({
//     age: 39,
//     job: {
//       title: 'Software Developer',
//       company: 'self-employed'
//     },
//     'location/city': 'Hamburg'
//   })
//   .then(() => {
//     console.log('Update call worked.');
//   })
//   .catch((e) => {
//     console.log('Something went wrong: ' + e);
//   });