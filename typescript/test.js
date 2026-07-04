//test.js
// 자바스크립트의 단점
console.log(2 + 3); //5
console.log(2 + '3'); //23

let n1 = 10;
let n2 = '10';
console.log(n1 == n2);  //true
console.log(n1 === n2); 

//var 변수의 호이스팅(변수 선언을 스코프의 최상단으로 끌어올리는 동작)
console.log(a);  //undefined
var a = 100;

// console.log(b);
let b = 200;

// 함수 정의시 호이스팅 문제
console.log(add(4, 5));  //호출

function add(x, y){ //정의
    return x + y;
}







