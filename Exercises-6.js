/*1. Melakukan Looping Menggunakan While

var low = 1;
var high = 21;

console.log(' LOOPING PERTAMA');
while (low < 21) {
    if (low % 2 == 0) {
        console.log(low + ' - I love coding')
    }
    low++;
}
console.log(' LOOPING KEDUA');
while (high > 1) {
    if (high % 2 == 0) {
        console.log(high + ' - I will become fullstack developer')
    }
    high--;
}

2. Melakukan Looping Menggunakan For

console.log(' LOOPING PERTAMA');
for (var a = 1; a < 21; a++) {
    console.log(`${a} - I love coding`)
}
console.log(' LOOPING KEDUA');
for (var b = 20; b > 0; b--) {
    console.log(`${b} - I will become fullstack developer`)
}

3. Angka Ganjil dan Genap

// 1-100 ganjil genap counter + 1
for (var c = 1; c <= 100; c++) {
    if (c % 2 == 0) {
        console.log('GENAP');
    }
    else {
        console.log('GANJIL')
    }
}
// 1-100 counter + 2 kelipatan 3
for (var d = 1; d <= 100; d += 2) {
    if (d % 3 == 0) {
        console.log(d + ' kelipatan 3');
    }
    else {
        console.log('')
    }
}
// 1-100 counter + 5 kelipatan 6
for (var e = 1; e <= 100; e += 5) {
    if (e % 6 == 0) {
        console.log(e + ' kelipatan 6');
    }
    else {
        console.log('')
    }
}
// 1-100 counter + 9 kelipatan 10
for (var f = 1; f <= 100; f += 9) {
    if (f % 10 == 0) {
        console.log(f + ' kelipatan 10');
    }
    else {
        console.log('')
    }
}
*/