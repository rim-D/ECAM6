/**
 * 함수형 프로그래밍
 * 상태 관리를 위한 패턴 (상태(state) 곧 데이터라고 생각할 수 있음)
 * 
 * vue -> vuex
 * react -> redux
 * 
 * Immutability(변경불가성)는 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴
 * 객체의 변경이 필용한 경우에는
 * 객체의 방어적 복사(defensive copy)를 통해 새로운 객체를 생성한 후 변경한ㄷ.
 * 
 * Observer패턴으로 객체의 변경 대처
 */

var statement = 'I am an immutable value'; // string은 immutable value

var otherStr = statement.slice(8, 17); // .slice() 메소드는 immutable value이기 때문에 기본 상태값이 변경 되지않음.

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'


var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2); // .push()는 메소드는 immutable value가 아니기 때문 기본 상태값이 변경됨
console.log(arr.length); // 1 



var user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};
  
var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee
console.log(user.name); // Kim
console.log(user); // Kim

myName = user.name;  // 재할당
console.log(myName); // Kim