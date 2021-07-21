// No 1
function teriak(){
    return "Halo Sanbers!";
}
console.log(teriak()); // "Halo Sanbers!" 

// No 2
function kalikan(num1, num2){
    return num1*num2;
} 
var num1 = 12;
var num2 = 4; 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

// No 3
function introduce(name, age, address, hobby){
    return "Nama saya "+ name+ ", umur saya "+age+" tahun, alamat saya di "+ address+", dan saya punya hobby yaitu "+ hobby+"!";
    // Cara lain: return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming"; 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"
