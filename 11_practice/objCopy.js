    // deep copy 
    // shallow copy

    let num1 = 1;
    let num2 = num1;

    num2 = 2;

    console.log(num1, num2); // num1: 1, num2: 2 <= deep copy
    // num1: 1, num2:2
    // num1: 2, num2:2 <= shallow copy 개념


    // 객체를 대입할 대는 shallow copy가 발생
    const obj = {
        name: '개발자',
        subscriber: 3000,
    };

    //let objCopy = obj; //<= shallow copy
    let objCopy = { ...obj }; //<= deep copy
    objCopy.subscriber = 100000;

    console.log(obj, objCopy);


    // deep copy와 shallow copy 나뉘는 이유는
    // deep copy가 비효율적일 경우가 많아서 임

    // 객체를 deep copy하는 경우, 모든 값을 대입하는 과정까지 걸리는 시간이 소요되기 때문
    // 그래도 실무에서 원래있는 값은 그대로 남겨 놓고 복사한 값은 새로운 걸로 사용해야하는 경우가 많음
    // let objCopy = {...obj}; <= 객체에 deep copy가 일어나게 됨 
