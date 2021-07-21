
var readBooksPromise = require('./promise.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
];

var timeAvailable = 10000;

//Contoh Jawaban 1

// readBooksPromise(timeAvailable, books[0])
// .then(function(time) {
//     console.log('Sisa waktu', time);
//     readBooksPromise(time, books[1])
//         .then(function(time) {
//             console.log('Sisa waktu', time);
//             readBooksPromise(time, books[2])
//             .then(function(time) {
//                 console.log('Sisa waktu', time);
//             })
//             .catch(function(error) {
//                 console.log(error);
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// })
// .catch(function(error) {
//     console.log(error);
// })

//Contoh Jawaban 3

var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
var booksQueue = books.length;
var time = 10000;

function execute(time, ind, booksQueue) {
    readBooksPromise(time, books[ind])
        .then(function (remainingTime) {
            time = remainingTime;
            booksQueue = booksQueue - 1;
            if (booksQueue > 0) {
                execute(time, ind+1, booksQueue);
            }
        })
        .catch(function (error) {
            
        })
}

execute(time, 0, booksQueue);
