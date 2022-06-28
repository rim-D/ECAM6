/* *
 * 예제1
 */
// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
    // 지역 변수 선언
    const x = 10;
    const y = 20;

    // 메서드 호출
    console.log( a + x + y); // 130

}

// 함수 호출
foo(100);

// 메서드 호출
console.log(x + y); // 3



/* *
 * 예제2 - 실행컨텍스트의 콜스택 개념
 * 프로그램이 함수 호출을 추적할 때 사용
 * 콜 스택은 각 함수 호출당 하나씩의 스택들로 이루어짐
 */

const x1 = 1;

function foo2 () {
    const y1 = 2;

    function bar () {
        const z1 = 3;
        console.log(x1 + y1 + z1); // 6
    }
    bar();
}

foo2(); 


// 스코프 체인
// 자바스크립트의 모든 코드는 스코프 체인을 갖고 있다.
// 스코프 체인은 해당 코드의 유효 범위(in scope) 안에 있는 변수를 정의하는 객체의 체인, 리스트다.
