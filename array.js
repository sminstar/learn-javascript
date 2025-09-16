console.log("==========================  배열  ============================");

const daysOfWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

daysOfWeek.forEach(element => {  
  console.log(element);
});

const idol = ["장원영", "안유진", "리즈", "리즈", "가을", "이서"];

console.log("\n");
console.log("idol[] length: " + idol.length);
console.log("\n");
var index = idol.indexOf("안유진");
console.log(idol[index] + ":" + parseInt(index + 1) + "번째" );
console.log("\n");
console.log(idol[idol.length-1] + ":" + parseInt(idol.length) + "번째" );

console.log("\n");
console.log("==========================  객체  ============================");
console.log("\n");


//객체
const person = {
  name: "김진아",
  isMale: false,
  mbti: "ENTJ",
  favoriteFoods: ["김밥", "잡채"]
}

console.log(person.name);
console.log(person["name"]);

console.log(person.favoriteFoods[1]);