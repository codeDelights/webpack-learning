import wrap from './sendMessage';
require('./style.css');

wrap('I Love Node');

class Person {
    constructor() {
        console.log('Classes are love!!!');
        
    }
}

new Person();
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
