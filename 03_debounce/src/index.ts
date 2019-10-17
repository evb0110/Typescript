import {debounce} from './ts-debounce';

const func = (word: string | number): void => {
    console.log(word);
};

const person = {
    name: 'John',
    age: 34,
    present() {
        console.log(`I am ${this.name}, my age is ${this.age} years`);
    },
};

const debouncedFunction = debounce(person.present.bind(person), 2000);


document.addEventListener('click', () => {
    debouncedFunction();
});
