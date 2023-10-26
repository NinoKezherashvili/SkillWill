// შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

const calculateAverage = () => {
  const inputElement = document.getElementById("numbersInput");
  const averageResult = document.getElementById("averageResult");

  const numbers = inputElement.value.split(":");
  let sum = 0;
  for (num of numbers) {
    sum = sum + Number(num);
  }
  const average = sum / numbers.length;

  averageResult.textContent = `Average: ${average.toFixed(2)}`;
};
