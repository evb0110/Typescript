function log() {
  return (target: any, key: string, descriptor: any) => {
    const className: string = target.constructor.name;
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      // Call the original method
      const result = original.apply(this, args);
      // Log the call, and the result
      console.log(`${className}.${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
      // Return the result
      return result;
    }

    return descriptor;
  };
}
class Calculator {
  // Using the configurable decorator
  @log()
  square(num: number) {
    return num * num;
  }
}
const calculator = new Calculator();

calculator.square(2);
calculator.square(4);