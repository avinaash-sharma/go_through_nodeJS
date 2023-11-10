// const person = {
//     name: "John Doe",
//     age: 30
// }



//When we are doing this it is getting Wrapped by Module Wrapper Function

// (funtion(exports, require, module, __filename, __dirname){
// })
console.log(__filename, __dirname);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My Name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;