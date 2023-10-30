const repeat = (str, x, cb) => {
  let result = str;
  console.log(result);
  for (let i = 1; i <= x; i++) {
    result = cb(result);
  }
  return result;
};

const c = repeat("nino", 4, (str) => ` ! ${str} !`);
console.log(c);


