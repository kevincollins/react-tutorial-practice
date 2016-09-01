

// ES6 语法

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        return "hi,我是" + this.name;
    }
}

export default Person;