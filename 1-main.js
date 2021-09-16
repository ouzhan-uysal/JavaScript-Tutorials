let arr = ["Kemal Sunal", 6, 7, "Oğuzhan", "Şener Şen", 9];
// console.log(...arr);    // Array'in direk değerlerine ulaşırsın


const avr = (...numbers) => {  // Sınırsız sayıda parametre alabilir. hepsini numbers içerisine atar.
    let count = 0;
    numbers.forEach(el => {
        count += el;
    });
    return count/numbers.length;
}
console.log(avr(4,5,6,7))


// Kopya Array oluşturma
let arr2 = ["Hezarfen", "Ahmet", "Çelebi"]
let arr3 = [...arr];     // like arr.slice()
arr2.push("Uçuyor");
console.log(arr2)

// En küçük değeri math fonk. ile çekme
let numbers = [9, 4, 1, 7];
console.log(Math.min(...numbers));  // return 1

// Del Duplicate Values
const arr4 = [1, 3, 3, 7];
const arr5 = [... new Set(arr4)]
console.log(arr5);    // [1, 3, 7]
