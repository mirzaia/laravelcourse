
//Contoh Jawaban 1

var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
];

var timeAvailable = 10000;

readBooks(timeAvailable, books[0], function(time) {
    readBooks(time, books[1], function(time) {
        readBooks(time, books[2], function(time){
            readBooks(time, books[0], function(time){
                return time;
            })
        })
    })
});


//Contoh Jawaban 2

// var readBooks = require('./callback.js')
 
// var books = [
//     {name: 'LOTR', timeSpent: 3000}, 
//     {name: 'Fidas', timeSpent: 2000}, 
//     {name: 'Kalkulus', timeSpent: 4000}
// ]

// var booksQueue = books.length;
// var time = 10000;

// function execute(time, ind, booksQueue) {
//     readBooks(time, books[ind], function(remainingTime) {
//         time = remainingTime;
//         booksQueue = booksQueue - 1; 
//         if (booksQueue > 0) {
//             execute(time, ind+1, booksQueue);
//         }
//     });
// }

// execute(time, 0, booksQueue);
