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