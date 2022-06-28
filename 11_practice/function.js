/**
 * * 함수명이 같을 경우,
 * * 마지막으로 선언되 함수가 적용되는 예제!
 */
function add(x, y) { return console.log(x + y); }

// ...
add(1, 2, 3, 4);

function add(x, y, z) { return console.log(`${x} + ${y} = ${x + y + z}`); }



/**
 * * 즉시 함수 - 스코프 체인 예제
 */
(function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
}());

//console.log(foo); // foo is not defined
// 함수 스코프가 생기면서 foo는 즉시 실행 함수의 지역 변수가 되어 
// 함수 밖으로 foo를 접근하려하면 접근불가하게 됨!


/**
 * * 전역 객체 - 스코프 체인 예제
 */
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name = 'Lee';
console.log(MYAPP.name); // Lee
console.log(MYAPP); // { name: 'Lee' }
// MYAPP.프로퍼티명 작성 후, 값을 할당해주면 key : value 객체 할당됨 



// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    /**
     * ! str = str || '';로 초기화 해주면  
     * ! 잘못된 코드로 에러가 발생하더라도 에러메시지를 던져
     * ! 다음 코드 실행이 안되게 되지않고
     * ! undefined롤 출력해주고, 다음 코드도 실행되게끔 해줌!!!
     * ! 또는 try...catch문으로 예외 처리해도 됨
     */
    str = str || '';
    return console.log(str + '/' + str.length);
}
  
getStringLength(22); // undefined
getStringLength('hi'); // 2


/**
 * * 클로저란?
 * * 함수와 함수가 선언된 어휘적 환경의 조합
 * * 클로저사용 후, 즉시 실행 함수 -> 메소드 리턴시켜서 메소드만 쓸 수 있게 끔하는 예제
 */
var Counter = (function(){
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환함
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    }
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

// 함수만 실행됨(정보은닉)
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0



function makeFunc() {
    var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
    function displayName() { // displayName() 은 내부 함수이며, 클로저다.
        console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
    }
    return displayName;
}

var myFunc = makeFunc();

myFunc();

