/**
 * ! 객체는 모양이 같아도 생성할 때 마다 새로운 객체가 생성됨
 * ! 같은 객체인지 비교하고 싶다면 기존 객체를 변수에 저장해 두어야 함!
 */

// {} === {}    -> false 출력

const a = { name: 'jisu' };
const arr = [ 1, 2, a ];

console.log( a === arr[2] ); // true


const jisu = {
    name : {
        first: 'jisu',
        last: 'jo'
    },
    gender:'m'
};

console.log(jisu.name.last);