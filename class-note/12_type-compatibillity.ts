interface Developer1 {
  name: string;
  skill: string;
}
interface Person1 {
  name: string;
}
var developer1: Developer1;
var person1: Person1;
developer1 = person1; //error 오른쪽에 있는 변수의 타입이 왼쪽에 있는 타입 보다 더 작은 관계, 부분을 유지하고 있기 때문에 부분 집합으로 보면 된다. 구조적으로 더 큰 타입에서는 더 작은 타입을 지원할 수 없다.
person1 = developer1; //complete

// 함수
var add1 = function(a: number) {
  // ...
}
var sum1 = function(a: number, b: number) {
  // ...
}
add1 = sum1; // error
sum1 = add1; //complete

// 제네릭
interface Empty<T> {
  //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; //complete
empty2 = empty1; //complete

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; // error
notEmpty2 = notEmpty1; // error
