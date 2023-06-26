

//map function
const ArrayNumbers = [1,2,3,4];
const NewArrayNumbers = ArrayNumbers.map(square);
function square (x)
{
    return x*x;
}
console.log(NewArrayNumbers)
console.log("--------------------------")

//map function direct function call
const ArrayNumbers1 = [1,2,3,4];
const NewArrayNumbers1 = ArrayNumbers1.map(function (x) {return x*x;});
console.log(NewArrayNumbers1)
console.log("--------------------------")



//arrow function
const ArrayNumber2 = [1,2,3,4];
const NewArrayNumbers2 = ArrayNumber2.map(x => x*x);
console.log(NewArrayNumbers2)
console.log("--------------------------")

//another example

let users = [
                {firstName : "Susan", lastName: "Steward"},
                {firstName : "Daniel", lastName: "Longbottom"},
                {firstName : "Jacob", lastName: "Black"}
           ];

let newusers = users.map(function (x) {return x.firstName + " " + x.lastName;});        

console.log(newusers)
console.log("--------------------------")

//filter array
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)
console.log("--------------------------")

const ages2 = [32, 33, 16, 40];
const result2 = ages2.filter(x => x>=18);


console.log(result)


