interface Developers {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developers | Person {
  return {name: 'Tony', skill: 'Iron Making'}
}
var tori = introduce();

if((tori as Developers).skill) {
  var skill = (tori as Developers).skill;
  console.log(skill)
}

// 타입 가드 정의
function isDevelopers(target: Developers | Person): target is Developers {
  return (target as Developers).skill !== undefined
}

if(isDevelopers(tori)) {
  console.log(tori.name)
} else {
  console.log(tori.age)
}