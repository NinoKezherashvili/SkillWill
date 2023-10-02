// დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი”

const CompareParams = (a, b) => {
  if (a === b) {
    return "ტოლია";
  } else return "არ არის ტოლი";
};

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში
// ● თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false

const ReturnCelsius = (tempF) => {
  if (typeof (tempF) === "number") {
    return (5 / 9) * (tempF - 32);
  } else return "False";
};



// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე
// operation ცვლადში განსაზღვრული
// ოპერაციით
// ● თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი,
// ოპერაცია დააბრუნე - false


const operations = ["+", "-", "*", "/"]

const DoOperation = (a,b,op) => {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return a / b;
  if (typeof(a) !== 'number' || typeof(b) !=='number' || operations.includes(op)=== false) return 'false'
}




