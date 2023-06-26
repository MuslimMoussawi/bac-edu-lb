//operator
var num1=10
var num2=2
var res=0
res= num1+num2
console.log("Sum: "+ res);
res=num1-num2;
console.log("Difference: "+res)
res=num1*num2
console.log("Product: "+res)
res=num1/num2
console.log("Quotient: "+res)
res=num1%num2
console.log("Remainder: "+res)
//increment & decrement
num1++
console.log("Value of num1 after increment "+num1)
num2--
console.log("Value of num2 after decrement "+num2)
console.log("------------------------------------- ")
//--------------------------------------------------------------------------

 num1 = 5;
 num2 = 9;
console.log("Value of num1: " + num1);
console.log("Value of num2 :" + num2);
var res = num1 > num2;
console.log("num1 greater than num2: " + res);
res = num1 < num2;
console.log("num1 lesser than num2: " + res);
res = num1 >= num2;
console.log("num1 greater than or equal to num2: " + res);
res = num1 <= num2;
console.log("num1 lesser than or equal to num2: " + res);
res = num1 == num2;
console.log("num1 is equal to num2: " + res);
res = num1 != num2;
console.log("num1 not equal to num2: " + res);
console.log("------------------------------------- ")
//--------------------------------------------------------------------------

var avg = 20;
var percentage = 90;
console.log("Value of avg: " + avg + " ,value of percentage: " + percentage);
var res = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res);
var res = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res);
var res = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res);
console.log("------------------------------------- ")
//--------------------------------------------------------------------------
var a = 12;
var b = 10;
a = b;
console.log("a=b: " + a);
a += b;
console.log("a+=b: " + a);
a -= b;
console.log("a-=b: " + a);
a *= b;
console.log("a*=b: " + a);
a /= b;
console.log("a/=b: " + a);
a %= b;
console.log("a%=b: " + a);

console.log(1 === 1.1);
console.log(1 == 2);