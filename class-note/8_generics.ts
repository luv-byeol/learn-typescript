// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');
// logText(5);

// 호출하는 시점에 타입을 넘겨줄 수 있다. any와 차이?
// any는 어떤 값이든 다 갖는다

// 유니온 타입과 제네릭의 차이 
// 유니온은 교집합 함께 쓸 수 있는 메소드만 사용 가능 string | number 일 때 .split 처럼 string에 쓸 수 있는 api 도 사용 하지 못함 정확한 한 타입이 아니라면.

// 제네릭 - 선언할 때는 모든 타입이 가능하지만 호출할 때 타입을 지정해서 타입에 쓸 수 있는 api들을 사용하기 좋음. 호출할 때마다 타입 지정 가능

// function logText(text: string | number) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// const str = logText<string>('a');
// str.split('')
// const login = logText<boolean>(true);

// // 인터페이스에 제네릭을 선언하는 방법
// // interface Dropdown {
// //   value: string;
// //   selected: boolean
// // }

// interface Dropdown<T> {
//   value: T;
//   selected: boolean
// }
// const obj: Dropdown<number> = {value: 5, selected: false}

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a');
// logTextLength(10);

// keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
  return itemOption;
}
getShoppingItemOption('name')
