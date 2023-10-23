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
