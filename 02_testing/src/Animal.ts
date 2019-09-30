export class Animal {
  constructor(public name: string) {}

  sayName(): void {
    console.log(this.name)
  }
}