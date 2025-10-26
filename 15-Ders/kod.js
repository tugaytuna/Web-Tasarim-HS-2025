console.log("Merhaba Dünya!");

console.log("tugay tuna");

// let/var degiskenİsmi = deger;
// let/var degiskenİsmi;
let isim = "ahmet can"; // string
var soyisim = "tuna";

var sayi1 = 12; // int
var sayi2 = 2;

console.log(isim, soyisim);

// console.log(soyisim);

console.log(sayi1 + sayi2);
console.log(sayi1 - sayi2);
console.log(sayi1 * sayi2);
console.log(sayi1 / sayi2);

// console.log(document.getElementById("baslik").innerHTML);

document.getElementById("baslik").innerHTML = "Javascript ile Değiştirildi!";

document.getElementById("ikinci").innerHTML = isim + soyisim;

document.getElementById("kartP").innerHTML = sayi1 * sayi2;

document.getElementById("kartP").style = "color: red";
