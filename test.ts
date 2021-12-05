class Test {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {}
}

// TestType  相当于 Test的构造器
type TestType = typeof Test;
type TestCon = new (name: string, age: number) => Test;

let OClass1: TestType;
let OClass2: TestCon;

let obj = new OClass1('z2', 22);
obj.eat();

let obj2 = new OClass2('z2', 22);
obj2.eat();

type constructorParamsType<T> = T extends new (...args: infer P) => any
  ? P
  : never;

type params = constructorParamsType<TestCon>;

type Constructor<T> = new (...args: any[]) => T;

function createInstance<T, P extends new (...args: any[]) => any>(
  constructor: Constructor<T>,
  ...args: constructorParamsType<P>
) {
  return new constructor(...args);
}

const instance = createInstance<Test, typeof Test>(Test, 'zhangsan', 4);
