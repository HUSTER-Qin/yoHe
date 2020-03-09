function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log(123);
  
}

@sealed
class MyClass {
  a: number = 0;
  b: string = "hello";
}

var obj = new MyClass();
// obj.c = true; // 编译报错