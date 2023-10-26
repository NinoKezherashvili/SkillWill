// დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// ● არ გამოიყენო string.replace() ფუნქცია

const replaceString = (string, valueToReplace, valueToReplaceWith) => {
  const NewArrayString = string.split(" ");
  const newString = [];
  for (let el of NewArrayString) {
    if (el === valueToReplace) {
      el = valueToReplaceWith;
      newString.push(el);
    } else {
      newString.push(el);
    }
  }
  return newString.join(" ");
};

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const replaceWithUpperCase = (string) => {
  const NewArrayString = string.split(" ");
  const newString = NewArrayString.map((el) => el.toUpperCase());
  return newString.join(" ");
};

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’,
// age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

const sortArray = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};
