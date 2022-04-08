class Person {
  private name: string;
  public age: number;
  readonly log: string;
  // 타입 먼저 지정 해주어야 함
  // 변수의 유효범위 이 변수 안에서만 사용 할 때 private
  // 기본적인 것 public
  // readonly: 접근만 가능 값 변경 안됨

  constructor(name: string, age:number) {
    this.name = name;
    this.age = age;
  }
}