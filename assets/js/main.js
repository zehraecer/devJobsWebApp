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


const mySet = new Set(["selam", 5, "dünyalı"]);
mySet.forEach(eleman => console.log(eleman))
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add('hello');
mySet.add('world');
mySet.add('hello');


console.log(typeof mySet);


console.log(mySet.size);

console.log(mySet.has(1));
console.log(mySet.has(3));


mySet.delete(1);
console.log(mySet.has(1));

mySet.forEach(value => {
    console.log(value);
});


mySet.clear();
console.log(mySet.size); // 0


const bigInt1 = 1234n;
const bigInt2 = BigInt("1234567890123456789012345678901234567890");

console.log(typeof bigInt1);
console.log(typeof bigInt2);



