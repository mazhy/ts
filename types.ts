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
