"use strict";
// 타입 할당 및 타입 추론하기
// 타입스크립트는 타입추론이라는 내장 기능이 있음
// 즉, 특정 변수나 상수에 어떤 타입을 사용했는지를 타입스크립트는 잘 이해 함.
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return n1 + n2;
}
// 변수에 타입 이름을 추가할 수 있음
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPharse = "Result is: ";
const result = add(number1, number2, printResult, resultPharse);
console.log(result);
