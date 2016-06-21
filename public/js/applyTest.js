/**
 * Created by 58 on 2016/6/8.
 */


/*定义一个人类*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
/*定义一个学生类*/
function Student(name, age, grade)
{
    //Person.apply(this, arguments);
    Person.call(this,name,age);
    this.grade = grade;
}

//创建一个学生类
var student = new Student("kevin", 21, "一年级");
//测试
console.log("name:" + student.name + "\n" + "age:" + student.age + "\n" + "grade:" + student.grade);
//大家可以看到测试结果name:qian  age:21  grade:一年级
//学生类里面我没有给name和age属性赋值啊,为什么存在这两个属性的值呢,这个就是apply的神奇之处.

