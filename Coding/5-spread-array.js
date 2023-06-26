/* ES6 provides a new operator called the spread operator. The spread operator is
represented by three dots “...” . The spread operator converts an array into individual
array elements. 
*/

function addThreeNumbers(a,b,c)
  {
  return a+b+c;
  }

  const arr = [10,20,30]
  console.log('sum is :',addThreeNumbers(...arr))
  console.log('sum is ',addThreeNumbers(...[1,2,3]))

 let source_arr1 = [10,20,30]
 let dest_arr1 = [...source_arr]

 console.log(dest_arr)
 console.log("--------------------------")
 //concatenate two arrays
 let arr1 = [10,20,30]
 let arr2 =[40,50,60]
 let arr3 = [...arr1,...arr2]
 console.log(arr3)
 console.log("--------------------------")
 //copy object
 let student1 ={firstName:'Mohtashim',company:'TutorialsPoint'}
 let student2 ={...student1}
 console.log(student2)
 let student3 = {lastName:'Mohammad'}
 let student4 = {...student1,...student3}
 console.log(student4)

 //concatenate objects


 let source_arr = [10,20,30]
 let dest_arr = [...source_arr]
 console.log(dest_arr)


 console.log("--------------------------")
