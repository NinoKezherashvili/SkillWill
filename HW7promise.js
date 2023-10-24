const timeout = (ms) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve();
      }, ms);
    } catch (err) {
      reject(err);
    }
  });
};

const makeToys = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
      resolve("undefected");
    } else {
      reject("defected");
    }
  });
};

const sellToys = (status) => {
  return new Promise((resolve, reject) => {
    if (status === "undefected") {
      if (Math.random() > 0.5) {
        resolve("Toy Sold");
      } else {
        reject("Toy did not sell");
      }
    }
  });
};

const deliverToys = (sellingStatus) => {
  return new Promise((resolve, reject) => {
    if (sellingStatus === "Toy Sold") {
      if (Math.random() > 0.5) {
        resolve("Toy delivered");
      } else {
        reject("Toy did not delivered");
      }
    }
  });
};

const toyStore = () => timeout(3000);
makeToys()
  .then((status) => {
    return timeout(1000).then(() => sellToys(status));
  })
  .then((sellingStatus) => {
    return timeout(2000).then(() => deliverToys(sellingStatus));
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

toyStore();
