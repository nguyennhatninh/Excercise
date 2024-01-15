// 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delayCallback(callback) {
    setTimeout(() => {
        console.log(callback());
    }, 2000);
}

// delayCallback(function () {
//     return 'Ninh';
// });

// 2. Write a JavaScript program that converts a callback-based function to a
// Promise-based function.
function callbackBasedFunction(data, callback) {
    if (data) {
        callback(null, data);
    } else {
        callback('error', null);
    }
}
function convertsPromise(data) {
    return new Promise((resolve, reject) => {
        callbackBasedFunction(data, (error, value) => {
            if (error) {
                reject(error);
            } else {
                resolve('Nhat ' + value);
            }
        });
    });
}
// convertsPromise('Ninh')
//     .then((value) => {
//         console.log('Name:', value);
//     })
//     .catch((error) => {
//         console.log('Error:', error.message);
//     });

// 3. Write a JavaScript program that implements a function that performs a series
// of asynchronous operations in sequence using Promises and 'async/await

async function asynchronousOperationsInSequence() {
    try {
        const result1 = await new Promise((resolve) => {
            setTimeout(() => {
                console.log('Async operations 1');
                resolve(1);
            }, 1000);
        });
        const result2 = await new Promise((resolve) => {
            setTimeout(() => {
                console.log('Async operations 2');
                resolve(2);
            }, 1000);
        });
        console.log('Completed:', result1, result2);
    } catch (error) {
        console.log('error: ' + error);
    }
}
// asynchronousOperationsInSequence();
