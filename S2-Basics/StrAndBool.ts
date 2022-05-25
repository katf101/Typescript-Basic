// 숫자 문자열 및 불리언 작업하기

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPharse = "Result is: ";

const result = add(number1, number2, printResult, resultPharse);
console.log(result);
