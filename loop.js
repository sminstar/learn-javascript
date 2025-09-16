console.log("in loop.js\n\n");

const numbers = [254, 48, 96, 33];

for(let i = 0; i < 10; i++){

  // console.log(`${i}번째 실행`);
  // console.log("============");
}


for(let i = 0; i < numbers.length; i++){

  // console.log("i" + i + ":" + numbers[i] * 2);
  // console.log(`😁${i}: ${numbers[i]}`);

}

console.log("\n");

numbers.forEach((value, index) => {
  // console.log(`😁${index}: ${value}`);
});


const ingredientList = ["🍀","🍅","🧀","🥓"];

let sandwitch = "🥯";


//각 재료들을 샌드위치에 추가

ingredientList.forEach((item) => {
  // console.log("🚀 ~ item:", item);
  // sandwitch += item;  
  // console.log("🚀 ~ sandwitch:", sandwitch);
  // console.log("============");

});

//console.log("🚀 ~ sandwitch:", sandwitch);

const students = ["alice", "bob", "david"];


//map 사용: 기존 배열을 조작하여 새로운 배열을 리턴
//원본 배열 영향X

console.log("🚀 ~ students orgin 0:", students);

const upperStudents1 = students.map((student) => {

  return student.toLocaleUpperCase();

})
console.log("🚀 ~ students after 1:", students);

const upperStudents2 = students.map((student) => student.toLocaleUpperCase())

console.log("🚀 ~ students after 2:", students);

console.log("🚀 ~ upperStudents1:", upperStudents1);
console.log("🚀 ~ upperStudents2:", upperStudents2);

console.log("\n");

//filter: 배열 안에 요소들 중 조건을 만족하는 배열의 요소들로 새로운 배열을 리턴

//글자수가 4글자 이상인 요소들만 필터링
console.log("filter: ", students.filter(student => student.length >= 4));

//find: 조건을 만족하는 첫 번째 요소 혹은 만족하는 요소가 없다면 undefined반환
console.log("find: ", students.find(student => student.length >= 4));

//some(): 하나 이상의 요소가 조건을 만족하는지 확인하여 boolean타입 반환
console.log("some: ", students.some(student => student.startsWith("a")));
//every(): 모든 요소가 조건을 만족하는지 확인하여 boolean타입 반환
console.log("every: ", students.every(student => student.startsWith("a")));
