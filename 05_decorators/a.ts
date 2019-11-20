class Foo {
  public data = 1;

  @decorate
  public printData(): void {
      console.log(this.data);
  }

}

const foo = new Foo();
foo.printData();

function decorate(target: any, propertyKey: string, desc: PropertyDescriptor) {
  const method = desc.value;
  desc.value = function(...args: any[]) {
    method.apply(this, args);
    method.apply(this, args);
  }
}
