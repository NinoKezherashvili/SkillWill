// მოცემულია მასივი
// [
// {name: 'Temo', age: 25},
// {name: 'Lasha', age: 21},
// {name: 'Ana', age: 28}
// ]

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

const returnYoungestPerson = (arr) => {
  let smallestAge = arr[0].age;
  let youngestPerson = arr[0];

  for (let person of arr) {
    if (person.age < smallestAge) {
      smallestAge= person.age;
      youngestPerson=person
    }
  }
  return youngestPerson.name;
};

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

//shallow copy:

const copyObjectShallow = (userObjS) => {
  return { ...userObjS };
};

//deep copy:

const copyObjectDeep = (userObjD) => {
  return (userCopyD = JSON.parse(JSON.stringify(userObjD)));
};

// ● დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let a, b;
let counta = 0;
let countb = 0;
do {
  a = getRandomNumber(1, 6);
  counta++;
} while (a !== 3);

do {
  b = getRandomNumber(1, 6);
  countb++;
} while (b !== 3);

if (counta < countb) {
  console.log(`Winner is player a - ${counta} rolls. Number of player b brolls - ${countb} `);
} else {
  console.log(`Winner is player b - ${countb} rolls. Number of player a rolls  - ${counta}`);
}
