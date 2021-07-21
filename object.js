// Soal 1

// Buatlah function dengan nama arrayToObject() yang menerima sebuah parameter berupa array multidimensi. 
// Dalam array tersebut berisi value berupa First Name, Last Name, Gender, dan Birthyear. 
// Data di dalam array dimensi tersebut ingin kita ubah ke dalam bentuk Object 
// dengan key bernama : firstName, lastName, gender, dan age. 
// Untuk key age ambillah selisih tahun yang ditulis di data dengan tahun sekarang.  
// Jika tahun tidak terdefinisi atau tahunnya lebih besar dibandingkan dengan tahun sekarang 
// maka kembalikan nilai : "Invalid birth year". 

// Contoh: jika input nya adalah 
// [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]  

// maka outputnya di console seperti berikut :
// 1. Abduh Muhamad : { firstName: "Abduh", lastName: "Muhamad", gender: "male", age: 28}
// 2. Ahmad Taufik : { firstName: "Ahmad", lastName: "Taufik", gender: "male", age: 35} 

// Untuk mendapatkan tahun sekarang secara otomatis bisa gunakan Class Date dari Javascript. 

// var now = new Date()
// var thisYear = now.getFullYear() // 2020 (tahun sekarang)

function arrayToObject(arr) {
    // Code di sini 
    if (arr.length <= 0) {
      return console.log("")
    }
  
    for (var i = 0; i < arr.length; i++) {
      var newObject = {}
  
      var birthYear = arr[i][3];
      var now = new Date().getFullYear()
      var newAge;
  
      if (birthYear && now - birthYear > 0) {
        newAge = now - birthYear
      } else {
        newAge = 'Invalid Birth Year'
      }
  
      newObject.firstName = arr[i][0]
      newObject.lastName = arr[i][1]
      newObject.gender = arr[i][2]
      newObject.age = newAge
  
      var consoleText = (i + 1) + '. ' + newObject.firstName + ' ' + newObject.lastName + ': '
  
      console.log(consoleText)
      console.log(newObject)
    }
  }
  
  // Driver Code
  console.log("=================Soal 1=================")
  var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
  arrayToObject(people)
  /*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
  */
  
  var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
  arrayToObject(people2)
  /*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
  */
  
  // Error case 
  arrayToObject([]) // ""
  
  // Soal 2
  
  // Diberikan sebuah function shoppingTime(memberId, money) 
  // yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId 
  // dan parameter ke-2 merupakan value uang (money) yang dibawa oleh member tersebut.
  
  // Toko X sedang melakukan SALE untuk beberapa barang, yaitu:
  // Sepatu brand Stacattu seharga 1500000
  // Baju brand Zoro seharga 500000
  // Baju brand H&N seharga 250000
  // Sweater brand Uniklooh seharga 175000
  // Casing Handphone seharga 50000
  
  // Buatlah function yang akan mengembalikan sebuah object 
  // dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.
  
  // Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
  // Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
  // Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu 
  // dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
  
  // Contoh jika inputan memberId: '324193hDew2' dan money: 700000
  // maka output:
  // { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
  
  function shoppingTime(memberId, money) {
    // you can only write your code here!
    if (!memberId) {
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < 50000) {
      return "Mohon maaf, uang tidak cukup"
    } else {
      var newObject = {}; // memberId, money, listPurchased dan changeMoney
      var moneyChange = money;
      var purchasedList = [];
  
      var sepatuStacattu = 'Sepatu Stacattu';
      var bajuZoro = 'Baju Zoro';
      var bajuHn = 'Baju H&N';
      var sweaterUniklooh = 'Sweater Uniklooh';
      var casingHandphone = 'Casing Handphone';
  
      var check = 0;
  
      for (var i = 0; moneyChange >= 50000 && check == 0; i++) {
        if (moneyChange >= 1500000) {
          purchasedList.push(sepatuStacattu)
          moneyChange -= 1500000
        } else if (moneyChange >= 500000) {
          purchasedList.push(bajuZoro)
          moneyChange -= 500000
        } else if (moneyChange >= 250000) {
          purchasedList.push(bajuHn)
          moneyChange -= 250000
        } else if (moneyChange >= 175000) {
          purchasedList.push(sweaterUniklooh)
          moneyChange -= 175000
        } else if (moneyChange >= 50000) {
  
          if (purchasedList.length != 0) {
            for (var j = 0; j <= purchasedList.length - 1; j++) {
              if (purchasedList[j] == casingHandphone) {
                check += 1
              }
            }
            if (check == 0) {
              purchasedList.push(casingHandphone)
              moneyChange -= 50000
            }
          } else {
            purchasedList.push(casingHandphone)
            moneyChange -= 50000
          }
  
          //Solusi lain menggunakan break:
          // purchasedList.push(casingHandphone)
          // moneyChange -= 50000
          // break;
        }
      }
  
      newObject.memberId = memberId
      newObject.money = money
      newObject.listPurchased = purchasedList
      newObject.changeMoney = moneyChange
  
      return newObject
    }
  
  }
  
  // TEST CASES
  console.log("=================Soal 2=================")
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja
  
  // Soal 3
  
  // Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.
  // Diberikan sebuah rute, dari A – F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
  // Contoh: input: [ [‘Dimitri’, ‘B’, ‘F’] ] output: [{ penumpang: ‘Dimitri’, naikDari: ‘B’, tujuan: ‘F’, bayar: 8000 }]
  
  function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrOutput = []
    //your code here
    if (arrPenumpang.length <= 0) {
      return []
    }
  
    for (var i = 0; i < arrPenumpang.length; i++) {
      var objOutput = {}
      // var arrOrang = arrPenumpang[i]
      var asal = arrPenumpang[i][1]
      var tujuan = arrPenumpang[i][2]
  
      var indexAsal;
      var indexTujuan;
  
      for (var j = 0; j < rute.length; j++) {
        if (rute[j] == asal) {
          indexAsal = j
        } else if (rute[j] == tujuan) {
          indexTujuan = j
        }
      }
  
      var bayar = (indexTujuan - indexAsal) * 2000
      // var bayar = Math.abs(indexTujuan - indexAsal) * 2000
  
      objOutput.penumpang = arrPenumpang[i][0]
      objOutput.naikDari = asal
      objOutput.tujuan = tujuan
      objOutput.bayar = bayar
  
      arrOutput.push(objOutput)
    }
  
    return arrOutput
  }
  
  //TEST CASE
  console.log("=================Soal 3=================")
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  console.log(naikAngkot([])); //[]
  