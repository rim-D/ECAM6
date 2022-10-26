arr = ['apple', 'orange', 'grape', 'banana', 'kiwi'];
const newArr = arr.slice().sort((a, b) => a - b);
const newArr2 = arr.slice().sort((a, b) => a[0].charCodeAt() - b[1].charCodeAt());
const newArr3 = arr.slice().sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()); // 오름차순
const newArr4 = arr.slice().sort((a, b) => b[0].charCodeAt() - a[0].charCodeAt()); // 내림차순
console.log(newArr);  // [ 'apple', 'orange', 'grape', 'banana', 'kiwi' ]
console.log(newArr2); // [ 'banana', 'kiwi', 'grape', 'orange', 'apple' ]
console.log(newArr3); // [ 'apple', 'banana', 'grape', 'kiwi', 'orange' ]
console.log(newArr4); // [ 'orange', 'kiwi', 'grape', 'banana', 'apple' ]

const newArr5 = arr.slice().sort((a, b) => a.localeCompare(b));
console.log(newArr5); 

arr2 = ["가위", "다람쥐", "나라", "하늘", "카드"];
const newArr6 = arr2.slice().sort((a, b) => a.localeCompare(b));
console.log(newArr6);
const newArr7 = arr2.slice().sort((a, b) => b.localeCompare(a));
console.log(newArr7);

const dateArr = [new Date(2020, 0, 1), new Date(2021, 0, 1)].sort((a, b) => a - b);
console.log(dateArr);