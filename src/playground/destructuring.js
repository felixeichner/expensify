// Object destructuring
const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Berlin",
    temp: -6
  }
}

const { name = 'Anonymous', age } = person;
const { city: town = 'Main City', temp: temperature } = person.location;

console.log(`${name} is ${age} and lives in ${town}, where it's ${temperature} degrees.`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);


// Array destructruring

const address = ['Bugenhagenstr. 16', '10551', 'Berlin', 'Berlin', 'Germany'];
const [street, zip, city, , country ="Fantasia"] = address;
console.log(`${street} is in ${zip}, ${city}. We are talking ${country}.`);

const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrize] = item;
console.log(`A medium sized ${itemName} costs ${mediumPrize}.`);