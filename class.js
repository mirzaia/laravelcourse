// Soal 1 Animal Class

// Terdapat sebuah class Animal yang memiliki sebuah constructor name, 
// default property legs = 4 dan cold_blooded = false.

// Buatlah class Animal yang menerima satu parameter constructor berupa name. 
// Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 
// dan cold_blooded bernilai false.
// Gunakan method getter untuk mengakses property di dalam class

//Release 0

class Animal {
    constructor(name) {
      this._name = name;
      this._legs = 4;
      this._cold_blooded = false;
    }
  
    get name() {
      return this._name
    }
  
    get legs() {
      return this._legs
    }
  
    set legs(amount) {
      this._legs = amount
    }
  
    get cold_blooded() {
      return this._cold_blooded
    }
  
  }
  
  var sheep = new Animal("shaun");
  
  console.log(sheep.name) // "shaun"
  console.log(sheep.legs) // 4
  console.log(sheep.cold_blooded) // false
  console.log(sheep.legs) // 4
  console.log(sheep.legs) // 4
  
  // Release 1
  
  // Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal. 
  // Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2, 
  // hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal. 
  // class Ape memiliki function yell() yang menampilkan “Auooo” 
  // dan class Frog memiliki function jump() yang akan menampilkan “hop hop”.
  
  // Code class Ape dan class Frog di sini
  class Ape extends Animal {
    constructor(name, amount) {
      super(name)
      this._legs = amount;
    }
  
    yell() {
      console.log("Auooo")
    }
  }
  
  class Frog extends Animal {
    constructor(name) {
      super(name)
    }
  
    jump() {
      console.log("hop hop")
    }
  }
  
  var sungokong = new Ape("kera sakti", 2)
  sungokong.yell() // "Auooo"
  console.log(sungokong.name)
  console.log(sungokong.legs)
  console.log(sungokong.cold_blooded)
  
  var kodok = new Frog("buduk")
  kodok.jump() // "hop hop" 
  console.log(kodok.name)
  console.log(kodok.legs)
  console.log(kodok.cold_blooded)
  
  // Soal 2 Function to Class
  
  // Terdapat sebuah class dengan nama Clock yang ditulis seperti penulisan pada function, 
  // ubahlah fungsi tersebut menjadi class dan pastikan fungsi tersebut tetap berjalan dengan baik. 
  // Jalankan fungsi di terminal/console Anda untuk melihat hasilnya.
  
  // Hint: Fokus soal ini hanya pada kegiatan mengubah struktur function Clock menjadi class. 
  // Jangan lupa menambahkan constructor di dalam class, 
  // dan ubah function di dalam Clock menjadi method pada class.
  
  // function Clock({ template }) {
  
  //   var timer;
  
  //   function render() {
  //     var date = new Date();
  
  //     var hours = date.getHours();
  //     if (hours < 10) hours = '0' + hours;
  
  //     var mins = date.getMinutes();
  //     if (mins < 10) mins = '0' + mins;
  
  //     var secs = date.getSeconds();
  //     if (secs < 10) secs = '0' + secs;
  
  //     var output = template
  //       .replace('h', hours)
  //       .replace('m', mins)
  //       .replace('s', secs);
  
  //     console.log(output);
  //   }
  
  //   this.stop = function() {
  //     clearInterval(timer);
  //   };
  
  //   this.start = function() {
  //     render();
  //     timer = setInterval(render, 1000);
  //   };
  
  // }
  
  class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
      // this.timer = setInterval(this.render.bind(this), 1000);
    }
  }
  
  var clock = new Clock({ template: 'h:m:s' });
  clock.start();
  