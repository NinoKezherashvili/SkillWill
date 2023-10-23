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

const toyStore = () =>
  makeToys()
    .then((status) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(status);
        }, "2000");
      });
    })
    .then((status) => sellToys(status))
    .then((sellingStatus) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(sellingStatus);
        }, "2000");
      });
    })
    .then((sellingStatus) => deliverToys(sellingStatus))
    .then((res) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res);
        }, "3000");
      });
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

toyStore();

//drois dinamiuri mititeba ar maqvs
