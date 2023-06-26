// var - function - for

var message="Hello World"
console.log(message)

//concatenate
var name = "tom"
console.log ("the value in the variable is:" + name)

//function
var num = 10

function test()
 {
    var num = 100
    console.log ("the value  inside is " + num)
    {
        console.log("Inner Block begins")
        let num=200
        console.log("value of num : "+num)
    }
 }

console.log ("the value outside is " + num)
test()
console.log ("------------------------------------------")

//variable type
let balance = 5000 // number type
console.log(typeof balance)

//array 
const DEPT_NOS = [10,20,30,50]
DEPT_NOS.push(40)
console.log('dept numbers is ',DEPT_NOS)
const EMP_IDS = [1001,1002,1003]
console.log('employee ids',EMP_IDS)


//for loop
let count=100
for (let count =1;count<=10;count++)
{console.log("count value inside loop is ",count);}

for (var i=1; i<=5;i++)
{console.log(i)}
