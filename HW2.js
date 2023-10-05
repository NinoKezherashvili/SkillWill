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
  for (let n of arr) {
    if (n.age < smallestAge) {
      smallestAge = n.age;
    }
  }
  return smallestAge;
};

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

//shallow copy:

const copyObjectShallow = (userObjS) => {
  return (userCopyS = { ...userObjS });
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
counta = 0;
countb = 0;
do {
  a = getRandomNumber(1, 6);
  console.log(` I am a ${a}`);
  counta++;
} while (a !== 3);

do {
  b = getRandomNumber(1, 6);
  console.log(` I am b ${b}`);
  countb++;
} while (b !== 3);

console.log(` I need ${counta} rolls`);
console.log(` I need ${countb} rolls`);

if (counta < countb) {
  console.log(` winner is a`);
} else {
  console.log(` winner is b`);
}
