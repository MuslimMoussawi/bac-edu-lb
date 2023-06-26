 /*
 A class definition can include the following:
* Constructors: Responsible for allocating memory for the objects of the class.
* Functions: Functions represent actions an object can take. They are also at times referred to as methods.
These components put together are termed as the data members of the class.
 */  

//Creating Objects
var Polygon = class Polygon
{
    constructor(height, width) 
    {
        this.h = height;
        this.w = width;
    }

    test()
    {
        console.log("The height of the polygon: ", this.h)
        console.log("The width of the polygon: ",this. w)
    }
}

var obj= new Polygon(10,12)
obj.test()

console.log('Setters--------------------------------')
//Setters 
class Student1
{
    constructor(rno,fname,lname)
    {
        this.rno = rno
        this.fname = fname
        this.lname = lname
        console.log('inside constructor')
    }
    set rollno(newRollno)
        {
            console.log("inside setter")
            this.rno = newRollno
        }
}

let s1 = new Student1(101,'Sachin','Tendulkar')
console.log(s1)
//setter is called
s1.rollno = 201
console.log(s1)

console.log('Getters--------------------------------')
// Getters

class Student2 
{
    constructor(rno,fname,lname)
    {
        this.rno = rno
        this.fname = fname
        this.lname = lname
        console.log('inside constructor')
    }

    get fullName()
    {
        console.log('inside getter')
        return this.fname + " - "+this.lname
    }
}

let s2 = new Student2(101,'Sachin','Tendulkar')
console.log(s2)
//getter is called
console.log(s2.fullName)

console.log('instanceof--------------------------------') 
class Person{ }
var obj=new Person()
var isPerson=obj instanceof Person;
console.log(" obj is an instance of Person " + isPerson);

