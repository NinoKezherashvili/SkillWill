// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი

const returnNumberArray = (a, b, ...rest) => {
  let multi = 1;
  for (let n of rest) {
    multi = multi * n;
  }
  return [a + b, multi];
};

// ● დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს. გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined

//example object

const user = {
  name: "nino",
  lastname: "kezherashvili",
  banks: [
    {
      name: "Bank A",
      address: {
        city: "New York",
        state: "NY",
      },
    },
    {
      name: "Bank B",
      address: {
        city: "Los Angeles",
        state: "CA",
      },
    },
    {
      name: "Bank C",
      address: {
        city: "Chicago",
        state: "IL",
      },
    },
  ],
};

const returnCity = ({ banks }, index) => {
  let cities = [];
  for (let el of banks) {
    cities.push(el.address.city);
  }
  return cities[index];
};

//example
const city = returnCity(user, 2)


// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს
// გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას გამოიყენეთ (...) ოპერატორი


//example object
const user3 = {
  name: "nino",
  lastname: "kezherashvili",
  banks: {
    city: "New York",
  },
};

const returnObject = (obj) => {
  let result = {};
  for (const fn in obj) {
    if (typeof obj[fn] === "object") {
      result[fn] = { ...obj[fn] };
    } else {
      result[fn] = obj[fn];
    }
  }
  return result;
};

const newObj = returnObject(user3);
