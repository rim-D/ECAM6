/**
 * map, reduce (자바스크립트 내장 메서드)
 * 
 * map메서드
 * 배열.map((요소, 인덱스, 배열) => { return 요소 });
 * 
 * map의 기본 원리
 * 반복문을 돌며 배열 안의 요소들을 1대 1로 짝지어 주는 것(즉, 매핑한다는 의미)
 * 어떻게 짝을 지어줄지에 대한 정의한 함수를 메서드의 인자로 넣어주면 됨!
 * 
 */

const oneTwoThree = [1, 2, 3];

let result = oneTwoThree.map((v) => {
    return v;
});
// 콘솔에는 1, 2, 3이 찍힘
console.log('onTwoThree==', oneTwoThree); // [1, 2, 3]
console.log('result===', result); // [1, 2, 3]
// map은 기존배열을 수정하지 않고 새로운 배열을 만듦
// 배열 안에 객체가 들어있는 경우, 객체는 공유됨 
console.log(oneTwoThree === result); // false

result = oneTwoThree.map((v) => {
    if(v % 2 === 0){
        return '짝수';
    }
    return '홀수';
});

console.log('홀짝===', result);


/**
 * reduce, reduceRight
 * 
 * reduce메서드
 * 배열.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초깃값);
 * 
 * 초깃값 설정 없을 시 1부터 시작
 * 
 */

const num = [1, 2, 3, 4, 5];

result = num.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);
//0 1 0
//1 2 1
//3 3 2
//6 4 3
//10 5 4
console.log(result); // 15


// map과 filter와 같은 함수형 메서드를 reduce로 구현 가능
// cur % 2 조건의 결괏값이 
// 숫자인 경우 결괏값이 0이 아닌 경우는 모두 true가 됩니다.
// 0이면 false로 치고요

// false값이 되는 경우
// 0 "" null undifind
result = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
console.log(result); // ['홀수', '짝수', '홀수']


// 홀수만 필터링하는 코드
result = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur);
    return acc;
}, []);
console.log(result); // [1, 3]

// sort, every, some, find, findIndex, includes도 다 reduce로 구현 가능

// reduce는 비동기 프로그래밍에도 유용
const promiseFactory = (time) => {
    return new Promise((resolve, reject) => {
      console.log(time); 
      setTimeout(resolve, time);
    });
  };
  [1000, 2000, 3000, 4000].reduce((acc, cur) => {
    return acc.then(() => promiseFactory(cur));
  }, Promise.resolve());
  // 바로 1000
  // 1초 후 2000
  // 2초 후 3000
  // 3초 후 4000


  // 오브젝트 배열에서 원하는 항목의 값만 더하기
  const friends = [
    {
      name: '양수진',
      age: 32,
      job: '선수',
      married: false,
    },
    {
      name: '오영제',
      age: 32,
      job: '랩퍼',
      married: false,
    },
    {
      name: '서준형',
      age: 32,
      job: '2년차 유부남',
      married: true,
    }
  ];

const data = friends.reduce((acc, cur, i)  => {
  return acc + cur;
  
}, 0);

console.log('data==', data);