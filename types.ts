/**
 * 类型守卫: typeof
 */
function doSome(x: number | string) {
  if (typeof x === 'string') {
    // 那么当前x就是string类型, 就可以使用String上的方法
    x.split(',');
  }
  // ts 推导不出x是什么类型, 所以只能.出来number和string 公共的...
  x.toString();
}

/**
 * 类型守卫 instanceof
 */
class Foo {
  foo: 1;
  common: '1';
}

class Bar {
  bar: 2;
  common: '2';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    arg.foo;
  }

  if (arg instanceof Bar) {
    arg.bar;
  } else {
    // 当前环境ts可以在else中推导出arg 的类型为 Foo
    arg.foo;
  }
}

/**
 * 类型守卫 in
 */
interface A {
  x: number;
  x1: string;
}

interface B {
  y: number;
  y1: string;
}

function doStuff2(q: A | B) {
  if ('x' in q) {
    q.x1;
  } else {
    q.y1;
  }
}

/**
 * 类型守卫: 字面量类型 ( === !== == !=)
 */
type State = 'yes' | 'no' | 'unknown';
function logOutStatee(state: State) {
  if (state === 'yes') {
    console.log('yes');
  } else if (state === 'no') {
    console.log('no');
  } else {
    console.log('unknown');
  }
}

type Foo1 = {
  kind: 'foo';
  foo: number;
};

type Bar1 = {
  kind: 'bar';
  bar: number;
};

function doStuff3(arg: Foo1 | Bar1) {
  if (arg.kind === 'foo') {
    arg.foo;
  } else {
    arg.bar;
  }
}

/**
 * 自定义类型守护
 */
function isString(data: any): data is string {
  return typeof data === 'string';
}
function doSome1(data: any) {
  if (isString(data)) {
    data.split(',');
  }
}
