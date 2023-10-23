// CALLBACKS
const res1 = setTimeout(() => {
  console.log("this is done");
}, 5000);
function dance(action, cb) {
  console.log(action);
  cb();
}
dance("a long dance", function () {
  console.log("applaud");
});

// PROMISE / TOY STORE
const res2 = new Promise(function exec(resolve, reject) {
  if (Math.random() > 0.1) {
    resolve("undefected");
  } else {
    reject("defected");
  }
}); // implements this in the function bellow

function makeToys() {
  return new Promise(function exec(resolve, reject) {
    if (Math.random() > 0.1) {
      resolve("undefected");
    } else {
      reject("defected");
    }
  });
}
function sellToys(status) {
  return new Promise(function exec(resolve, reject) {
    if (status === "undefected") {
      if (Math.random() > 0.5) {
        resolve("Toy sold");
      } else {
        reject("Toy did not sell");
      }
    }
  });
}
// makeToys()
//   .then((status) => sellToys(status))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// ASYNC / AWAIT
async function promisify() {
  return 1 + 1;

  return new Promise((resolve, reject) => {
    resolve(1 + 1);
  });
} // async introduction

async function makeToys() {
  if (Math.random() > 0.1) {
    return "undefected";
  } else {
    return "defected";
  }
}
async function sellToys(status) {
  if (status === "undefected") {
    if (Math.random() > 0.5) {
      return "Toy sold";
    } else {
      return "Toy did not sell";
    }
  }
}
async function promisify() {
  try {
    const status = await makeToys();
    const result = await sellToys(status);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
promisify();

// FOO / BAR / BAZ - CALL STACK (EXAMPLE)
function bar() {
  console.log("barr");
}
function baz() {
  bar();
}
function foo() {
  baz();
}
foo(); // call stack introduction

// WEB API setTimeout vs sync (EXAMPLE)
setTimeout(() => {
  console.log("James");
}, 5000);
console.log("Bond");
