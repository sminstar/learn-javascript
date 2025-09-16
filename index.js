

const username = "smin";//상수
let usermbti = "ISFP";//변수
// console.log("🚀 ~ usermbti:", usermbti);

// console.log("Hello world");
// console.log(username);
// console.log(usermbti);
// console.log("usermbti", usermbti);


// usermbti = "ISTP";
// console.log("🚀 ~ 변경된 usermbti:", usermbti);


const number = 12;
const string = "텍스트";
const bool = true;
const empty = undefined;


// console.log("num", typeof num);
// console.log("str", typeof str);
// console.log("bool", typeof bool);
// console.log("empty", typeof empty);

/**
 * null과  undifined 차이
 * null: 개발자 설정
 * undifined: 개발자 의도와 상관없이
 * 
 */


console.log("==========================  함수  ==============================");

//함수

//함수 정의/선언
function greeting() {

  console.log("반갑습니다! " + username);
  // console.log(`반갑습니다. ${username}님, 당신의 MBTI는 ${usermbti}시군요.`);

}


//함수 호출/실행
greeting();

//함수의 인자와 매개변수
const sum = (a, b) => {

  const result = a + b;
  // console.log("result:" + result)
  return result;
}

//미션

const sayHello = (param_name) => {

  console.log(`반갑습니다. ${param_name}님!`);
  
}

sayHello(username);

const double = (num) => {

  const result = num * 2;
  return result;
}

const add = sum(11, 22);

const doubleResult = double(add);
console.log(doubleResult);


console.log("==========================  조건문  ============================");

const score = 78;


if(score >= 60){
  console.log("합격");
}else{
console.log("불합격");
}

console.log("if문 종료");

let grade = "";

if(score >= 90){
  grade = "A등급";
} else if(score >= 80){
  grade = "B등급";
}else if(score >= 70){
  grade = "C등급";
}else if(score >= 60){
  grade = "D등급";
} else {
  grade = "F등급";
}

console.log(grade);


// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다


// 함수 테스트 - 아래 코드는 수정하지 마세요
// console.log("기본 샌드위치 주문: " + orderSandwich());
// console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
// console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒

*/


const orderSandwich = (type = "noParam") => {

  var result = "";

  console.log("type ====> " + type);

  // if(type == "basic"){

  //   result = "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  // }else if(type == "vegan"){
  //   result = "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
  // }else {
  //   result = "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  // }

  result = type === "vegan"?"🥖 + 🥬 + 🍅 + 🥑 + 🥒":"🥖 + 🥬 + 🍅 + 🧀 + 🥓"; 

  return result;
}

console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

;;;

// age의 값이 18세 이상이면 adultType의 값은 "성인" 
// age의 값이 18세 미만이면 adultType의 값은 "미성년자"
const age = 20;
const adultType = age >= 18 ? "성인" : "미성년자";
console.log("\n");
console.log("adultType:" +  adultType);


if(0) {
  console.log("true");
}else {
  console.log("false");
}


const userInput = "";

// if(userInput){  
//   alert("입력값 작성됨");
// }else{
//   alert("입력값을 작성하세요");
// }

;;

//Q2. 함수 (parameter 정의)
//문제: 두 개의 숫자를 입력받아 그 차이를 계산하는 함수를 화살표 함수로 작성하세요.

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (a, b) => {

  return a - b;
}

// 함수 테스트
console.log("\nQ2 문제:\n");
console.log(minus(60, 20));// 예상 결과: 40



/*
Q3. 함수 (argument를 사용한 함수 호출)
문제: 다음 함수가 주어졌을 때, 이 함수를 호출하여 "안녕하세요, [이름]님. 당신의 나이는 [나이]세입니다."라는 메시지를 출력하는 코드를 작성하세요.
*/

const introduce = (name, age) => {
  return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log("\nQ3 문제:\n");
console.log( introduce("김철수", 25) );// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."




