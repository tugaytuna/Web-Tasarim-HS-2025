console.log("Merhaba Dünya!");
console.log("tugay tuna");

console.log(2 * 5);

let sayi1 = 52;
let isim = "tugay";

console.log(sayi1);
console.log("isim");

console.log(isim, sayi1);

isim = "tuna";

console.log(isim);

console.log(document.getElementById("baslik").innerHTML);

document.getElementById("baslik").innerHTML = isim;

let sayac = 2;

let sayacElement = document.getElementById("sayac");

function karsila() {
  console.log("merhaba");
  console.log("sayac: " + sayac);
  sayac = sayac + 2;
  sayacElement.innerHTML = sayac;
}

// karsila();

// karsila();
