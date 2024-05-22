const name = "Zehra"
const number = 299
const isThere = false
let age;
let names = ['Zehra', 'Ahsen', 'Ömer']
let person = { ad: 'Zehra', soyad: 'Ecer', yas: 28 };
names[1] = "Ali"
person = null

let x = "5"
let y = "8"
console.log(x * y);

function example() {
    return 5;
}
console.log(typeof example);

const map = new Map()

map.set("isim", "ahsen")
map.set("yas", 4)
map.delete("isim")

console.log(map.get("isim"));
console.log(map.get("yas"));

const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());




