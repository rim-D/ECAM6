// Object.assign
// 타킷 객체로 소스 객체의 프로퍼티를 복사한다.
// 이때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타켓 객체의 프로퍼티들은
// 소스 객체의 프로퍼티로 덮어쓰기 됨

// 리턴값으로 타킷 객체를 반환함.

// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); //{ a: 1, b: 2, c: 3 }
console.log(o1); //{ a: 1, b: 2, c: 3 }, 타켓 객체가 변경된다.



// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };


/**
 * * 기존 객체를 변경하지 않고, 객체를 복사하여 사용할 수 있음
 * * Object.assign은 완전한 deep copy를 지원하지 않는다.
 * 객체 내부의 객체는 Shallow copy된다. 
 */
const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
console.log(o6);