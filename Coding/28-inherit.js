/*
console.log('--------------------------------class inheritance--------------------------------') 

class Shape
{
        constructor(a)
        {
            this.Area=a
        }
}

class Circle extends Shape
{
    disp()
     { 
        console.log("Area of the circle: "+this.Area)
     }
}

var obj=new Circle(223);
obj.disp()


Inheritance can be classified as:
* Single: Every class can at the most extend from one parent class
* Multiple: A class can inherit from multiple classes. ES6 doesn’t support multiple inheritance.
* Multi-level: Consider the following example.
console.log('--------------------------------Multi-level inheritance--------------------------------') 

class Root
{
    test()
    {
          console.log("call from parent class")
    }
}
class Child extends Root
{

}
class Leaf extends Child
//indirectly inherits from Root by virtue of inheritance
{

}

var obj= new Leaf();
obj.test()


console.log('--------------------------------Method Overriding--------------------------------') 

class PrinterClass
{
    doPrint()
    {
         console.log("doPrint() from Parent called")
    }
}
class StringPrinter extends PrinterClass
{
    doPrint()
    {
        console.log("doPrint() is printing a string…") 
    }
}           
var obj= new StringPrinter()
obj.doPrint()

console.log('--------------------------------The Super Keyword--------------------------------') 
*/
class PrinterClass
{
    doPrint()
    {
        console.log("doPrint() from Parent called…")
    }
}

class StringPrinter extends PrinterClass
{
    doPrint()
    {
        super.doPrint()
        console.log("doPrint() is printing a string…") 
    }
}

var obj= new StringPrinter()
obj.doPrint()