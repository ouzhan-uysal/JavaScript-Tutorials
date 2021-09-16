// Spread Kullanım
let arr = ["Kemal Sunal", 6, 7, "Oğuzhan", "Şener Şen", 9];
// console.log(...arr);    // Array'in direk değerlerine ulaşırsın

// yaz = (a, b, ...values) => {
//     console.log(values);
// }
// yaz(20, 30, "oguz", "x");

const avr = (...numbers) => {  // Sınırsız sayıda parametre alabilir. hepsini numbers içerisine atar.
    let count = 0;
    numbers.forEach(el => {
        count += el;
    });
    return count/numbers.length;
}
console.log(avr(4,5,6,7))


// Rest Kullanım



