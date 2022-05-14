// Trạng thái của promise

// 1. Pendding
// 2. Fullfilld
// 3. Rejected


// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: reject()
//         let courses = '[{"id":"1","name":"Javascript"}]';
//         resolve(JSON.parse(courses));
//     }
// );

// promise
//     .then(function(course) {
//         console.log(course);
//     })
//     .catch(function() {
//         console.log('Failure');
//     })
//     .finally(function() {
//         console.log('Done');
//     });

// var promise2 = new Promise(
//     function(resolve, reject) {
//         resolve();
//     }
// );

// // Chain = tính chất chuỗi

// promise2
//     .then(function(){
//         return new Promise(
//             function(resolve) {
//                 setTimeout(resolve, 3000);
//             }
//         )
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data);
//         return 3;
//     })
//     .then(function(data){
//         console.log(data);
//         return 4;
//     })
//     .then(function(data){
//         console.log(data);
//         return 5;
//     })

//     .catch(() => {
//         console.log('Failure');
//     })

//     .finally(() => {
//         console.log('Done');
//     })
// function sleep(ms) {
//     return new Promise(
//         function(resolve) {
//             setTimeout(resolve, ms);
//         }
//     )
// }

// sleep(1000)
//     .then(() => {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log(2);
//         return new Promise(
//             (resolve, reject) => {
//                 reject('Có lỗi!');
//             }
//         )
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Done");
//     })

// function Time() {
//     setTimeout(() => {
//             console.log("Sau 4 giây thì in ra")
//     }, 0);
// }

// function sleep(ms) {
//     return new Promise(
//         (resolve) => {
//             setTimeout(()=>{
//                 resolve();
//             }, ms)
//         }
//     )
// }

// sleep(4000) 
//     .then(()=>{
//         Time();
//         return sleep(3000);
//     })
//     .then(() => {
//         console.log("sau 3 giây thì in");
//         return sleep(2000);
//     })
//     .then(() => {
//         console.log("sau 2 giây thì in");
//     })

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

var promise = new Promise(
    (resolve, reject) => {
        // resolve("Success!");
        reject("Error")
    }
)

promise
    .then((result) => {
        console.log('result: ', result);
    })
    .catch((err) => {
        console.log('error: ', err);
    })

var promise1 = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve([1]);
        }, 2000)
    }
)

var promise2 = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve([2, 3]);
        }, 5000)
    }
)

Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result.join());
    })
