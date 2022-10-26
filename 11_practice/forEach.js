const answer = [3, 1, 4, 6];
const value = '3214';

let strike = 0;
let ball = 0;
answer.forEach((element, i) => {
  const index = value.indexOf(element);
  console.log(index);
  if (index > -1) { // 일치하는 숫자 발견
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
});

console.log('strike===', strike);
console.log('ball===', ball);

/*
 *  forEach의 인수
 *  forEach             1           5          4          2
 *  (number, index) => {number=1   number=5   number=4   number=2
 *                      index=0    index=1    index=2    index=3
 * }
 */