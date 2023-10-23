let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);



//   let promise = new promise ( function (resolve, reject) {

//     //resolve
//     //reject
//   })

//   promise.then - ra gavaketo kargze
//   promise.catch - ra gavaketo cutze