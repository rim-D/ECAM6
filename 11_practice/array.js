// 배열 안에 어떠한 자료형 값을 넣을 수 있다.
const arrayOfArray = [[1,2,3],[4,5]];
console.log(arrayOfArray[0]); // [1,2,3]

const a = 10;
const b = 20;

const varibleArray = [a, b, 30];
console.log(varibleArray[1]); // 20

// 배열의 마지막 요소 찾기
const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement[findLastElement.length - 1]);

// arr라는 배열이 있을 때 배열의 마지막에서 세 번째 요소 찾기
console.log(findLastElement[findLastElement.length - 3]);



// 배열의 요소 추가+ 빼기
// 첫 번째 요소  unshift, shift
// 마지막 요소 push, pop
const target = ['a', 'b', 'c', 'd', 'e'];
target[5] =  'f';
console.log(target);

const target1 = ['가', '나', '다'];
console.log('===== 배열의 마지막 요소 추가');
target1[target1.length +1] = '라';
console.log(target1);

console.log('===== 배열의 젤 앞에 요소 추가');
target1.unshift('거');
console.log(target1);

console.log('===== 배열의 젤 앞에 요소 제거');
target1.shift();
console.log(target1);

console.log('===== 배열의 마지막 요소 추가');
target1.push('홀');
console.log(target1);

console.log('===== 배열의 마지막 요소 제거');
target1.pop();
console.log(target1);

// splice
console.log('===== 배열의 중간 요소 제거');
const target3 = ['1', '2', '3', '4', '5'];
target3.splice(1, 2); // splice('지우고 싶은 시작 인덱스', '시작지점으로부터 지우고 싶은 갯수')
console.log(target3);
console.log('===== 배열의 중간 요소 제거하면서 추가하기');
// 삭제 요소를 0으로 지정할 경우, 중간 사이에 값이 추가됨
target3.splice(2, 0, '가', '나');// splice('지우고 싶은 시작 인덱스', '시작지점으로부터 지우고 싶은 갯수', '추가 요소')
console.log(target3);

const result = target3.includes('다');
const result2 = target3.includes('1');
console.log('===== includes로 배열 요소 유무 확인 방법');
console.log(result);
console.log(result2);

console.log('===== indexOf, lastIndexOf 검색하고 싶은 값의 인덱스 위치 찾기');
const result3 = target3.indexOf('다');
const result4 = target3.lastIndexOf('가');
const result5 = target3.indexOf('1');
console.log(target3);
console.log(result3); // 없는 값일 경우 -1 내보냄
console.log(result4);
console.log(result5);


console.log('=====  배열 반복하기');
const target4 = ['가', '나', '다', '라', '마'];

console.log('=====  while 배열 반복하기');
let i = 0;
while(i < target4.length) {
    console.log(target4[i]);
    i++;
}
console.log('=====  for 배열 반복하기');
for(let j = 0; j < target4.length; j++){
    console.log(target4[j]);
}

// 다음 배열에서 '라'를 모두 제거하세요. 
// indexOf와 splice를 사용하세요.
const arr = ['가', '라', '다', '사', '라', '마', '라'];

for(let k = 0; k < arr.length; k++) {
    if(arr.indexOf('라') > -1) {
        console.log(arr.indexOf('라'));
        arr.splice(arr.indexOf('라'), 1);    
    }  
}

console.log(arr);

