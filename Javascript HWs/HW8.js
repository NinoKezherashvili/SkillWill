// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

const expo = (num, power, cb) => {
  let result = num;

  for (let i = 1; i < power; i++) {
    result = cb(result, num);
  }

  return result;
};

const c = expo(2, 4, (result, num) => result * num);
console.log(c);

//   fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

const getData = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!res.ok) {
      throw Error("Not good request");
    }
    const data = await res.json();
    data.forEach((el) => {
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      let span = document.createElement("span");
      let p = document.createElement("p");
      h1.textContent = el.title;
      p.textContent = el.body;
      span.textContent = `user id: ${el.userId}`;
      div.appendChild(h1);
      div.appendChild(p);
      div.appendChild(span);
      document.body.append(div);
    });
  } catch (error) {
    console.log(error.message);
  }
};

getData();

// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ ყველაფერი
// კარგად არის, გამოიძახოს resolve
// კოპირებული ობიექტით

const copyObjectAsync = async (obj) => {
  const myPromise = new Promise((resolve, reject) => {
    if (typeof obj === "object" && obj !== null) {
      const copiedObject = JSON.parse(JSON.stringify(obj));
      resolve(copiedObject);
    } else {
      reject("Input is not an object");
    }
  });

  myPromise
    .then((copiedObject) => {
      console.log(copiedObject);
      return copiedObject;
    })
    .catch((err) => {
      console.log(err);
    });
};

copyObjectAsync({ type: "Fiat" });
