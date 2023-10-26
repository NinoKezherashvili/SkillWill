// შექმენი input და button
// ● input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად
// ● (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white)
// ● თუ სხვა ფერი ჩაწერა, გამოუტანე
// შეტყობინება alert-ის საშუალებით

const colorForm = document.getElementById("formContainer");
const colorInput = document.getElementById("colorInput");

const allowedColors = ["red", "blue", "green", "black", "white"];

colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const color = colorInput.value.toLowerCase();

  if (allowedColors.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert("Please enter a valid color: red, blue, green, black, or white.");
  }
  colorInput.value = "";
});
