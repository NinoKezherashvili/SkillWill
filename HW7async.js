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

const makeToys = async () => {
  if (Math.random() > 0.1) {
    return "undefected";
  } else {
    return "defected";
  }
};

const sellToys = async (status) => {
  if (status === "undefected") {
    if (Math.random() > 0.5) {
      return "Toy Sold";
    } else {
      return "Toy did not sell";
    }
  } else {
    return "Toy defected";
  }
};

const deliverToys = async (sellingStatus) => {
  if (sellingStatus === "Toy Sold") {
    if (Math.random() > 0.5) {
      return "Toy delivered";
    } else {
      return "Toy did not delivered";
    }
  } else {
    return "Toy was defected and wasn't been sold";
  }
};

const toyStore = async () => {
  try {
    const status = await makeToys();
    await timeout(3000);
    const sellingStatus = await sellToys(status);
    await timeout(1000);
    const res = await deliverToys(sellingStatus);
    await timeout(2000);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

toyStore();
