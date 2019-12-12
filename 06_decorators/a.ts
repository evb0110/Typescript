
function log(message: string) {
return function (target: any, key: string, descriptor: PropertyDescriptor): void {
  const className: string = target.constructor.name;
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = original.apply(this, args);
    console.log(`${message}! ${className}.${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
    return result;
  }
};
}


class Calculator {
  private num = 100;

  @log('Hello')
  square(num: number) {
    return num * num;
  }

  @log('Hello')
  sum(...args: number[]) {
    console.log(this.num);
    return args.reduce((acc, el) => acc + el);
  }
}
const calculator = new Calculator();

calculator.square(2);
calculator.square(4);
calculator.sum(3,4,5)