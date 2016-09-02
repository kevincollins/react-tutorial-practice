

// ES6 语法

class Person{
    constructor(name){
        this.name = name;
    }

    say(age){
        return "Hi,my name is " + this.name + " , age is " + age;
    }
}

export default Person;