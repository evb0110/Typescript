class Person {
    name: string = 'John';
    
    sayName(this: Person) {
        console.log(this.name);
    }
}

const john = new Person();
john.sayName();

const mary = { name: 'Mary', sayName: john.sayName };

mary.sayName();
