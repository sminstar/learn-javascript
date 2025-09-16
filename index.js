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
debugger;
const double = (num) => {

  const result = num * 2;
  return result;
}

const add = sum(11, 22);

const doubleResult = double(add);
console.log(doubleResult);


console.log("==========================  조건문  ==============================");

const score = 70;


if(score >= 60){
  console.log("합격");
}else{
console.log("불합격");
}

console.log("if문 종료");