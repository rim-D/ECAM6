
// function() {} // 익명함수

// 함수에 이름붙이면 다른 곳에서도 사용 가능
// 함수에 이름 붙이는 방법
function a() {}; // 함수 선언문
const b = function() {}; // 함수 표현식
const c = () => {}; // 함수 표현식

// 리턴값 
function d() { return undefined; }
function d1() {} // return undefined가 생략되어 있음

// 리턴값을 여러개 보내고 싶을 때!
// 배열 또는 객체 리터럴 값으로 내보내면 됨!
function e() {
    return [1, 5];
}
console.log(e());
