// 1. Write a JavaScript program to list the properties of a JavaScript object.

function getProperties(obj) {
    let result = Object.keys(obj);
    return result.join(', ');
}

let student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12,
};

// console.log(getProperties(student));

// 2. Write a JavaScript program to delete the rollno property from the following
// object. Also print the object before or after deleting the property.

function deleteProperties(obj) {
    if (Object.keys(obj).includes('rollno')) {
        delete obj['rollno'];
    }
    return obj;
}
// console.log(deleteProperties(student));

// 3. Write a JavaScript program to get the length of a JavaScript object.

function getLength(obj) {
    return Object.keys(obj).length;
}
// console.log(getLength(student));

// 4. Write a JavaScript program to display the reading status (i.e. display book
// name, author name and reading status) of the following books.

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    },
];
function readingStatus(arr) {
    let result = [];
    arr.forEach((item) => {
        result.push(`${item.title} by author ${item.author}: ${item.readingStatus ? 'Already read' : 'Not yet read'}`);
    });
    return result;
}
// console.log(readingStatus(library));

// 5. Write a JavaScript program to create a clock.
// Note: The output will come every second.

function aClock() {
    setInterval(() => {
        let clock = new Date();
        console.log(`${clock.getHours()} : ${clock.getMinutes()} : ${clock.getSeconds()}`);
    }, 1000);
}
// aClock();

// 6. Write a JavaScript function to print all the methods in a JavaScript object.

function allProperties(obj) {
    return Object.getOwnPropertyNames(obj);
}
// console.log(allProperties(Array));
