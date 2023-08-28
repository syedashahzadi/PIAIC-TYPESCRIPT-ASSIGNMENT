// Create a function that takes an array , an index and a values as parameters.inside the function
// ,use the splice method to insert value at the specified index in the array .Return the modified array.

let array:number[] = [1,2,3,4,5,6,7];
let index:number = 5;
let value:number = 7;
function arrayIndexValue(array:number[],index:number, value:number,) {
    array.splice (index,0,value)
    return array 
}
var modifiedArray:number[]= arrayIndexValue(array,index,value)
console.log(modifiedArray);

// Implement a simple shopping cart program using an array .Create a function to add items ,remove items,and
//update quantities using the splice method.Print the carts contents after each operation,
let shoppingAddCart:string[] = ["clothes","shoes","makeup"]
shoppingAddCart.splice(2,0, "jewellery");
console.log(shoppingAddCart);
//Create a function to add items remove items
let shoppingRemoveCart:string[]= ["jewellery","snacks","curtains"]
shoppingRemoveCart.splice(0,1, "bedsheet")
console.log(shoppingRemoveCart);
//Create a function that update quantities.
let updateQuantities:string[]=["cups","glass","plates","boxes"]
updateQuantities.splice(0,2,"nailpolish","color")

//write a program that use a while loop to print the first 25 integers.
 let num:number = 1;
 while (num<=25) {
    console.log(num);
    num++
 }
//write a program that uses a while lop to print frist 10 even number.
let i:number =1;
while (i<=10) {
let result= i*2;
console.log(result);
++i
} 
//Create a function that takes a positive integers as parameters and a while loop
// to calculate and return the factorial of that number.
function calfactorial(num:number)
{
   while (num ! ==0) {
    let calculateFactorial:number = 1;
    calculateFactorial = calculateFactorial* num;
    num--;
   }
   return calculateFactorial ;
}
var calculateFactorial:number = 5;
var result :number=(calculateFactorial)
console.log(`factorial of num`,result);
// problem #6
let array1:number[] = [-1,-2,3,-4,5,-6]
console.log("Array include all the negative numbers",array1);
for (let i:number=0;i<array1.length; ++i) {
  if(array1[i]<0){
    array1.splice(i,1)
  }
}
console.log("Array including all the negative numbers",array1);

//problem #7
let array2:number[]= [1,2,3,4,5,6,7,8,9]
let r:number = 0;
let total = 0;
while (r < array2.length) {
    total += array2[r]
    r++
}
console.log("sum of aray",total);

//problem # 8
let temprature = [40,50,65,30];
var farenhiet:number []=[];
function InFarenhiet(temprature:number[],farenhiet:number[]) {
  let i = 0;
  while (i<temprature.length) {
    farenhiet[i]=(temprature[i]* 9/5)+32;
    i++
  }
}
InFarenhiet(temprature,farenhiet)
console.log(`Temprature list After Conversion ${farenhiet}`);

