// Given an array of number [1,2,3,4,5] use the map method
// to create new array where each number is multiplied by 2
let array1: number[]= [1,2,3,4,5,6,7,8]
let newArr:number []= array1.map((number)=> number *2)    
console.log(newArr);
 // Given an array of temprature in celsius [0,10,20,30,40] use the map method to 
 //create a new array where each temprature is converted to Fahrenhiet using the formla
let Celsius:number[]= [0,10,20,30,40]
let Fahrenhiet:number[] = Celsius.map(( Celsius:number) =>{
    let Fahrenhiet:number = (Celsius* 9/5)+32
    return Fahrenhiet
}) 
console.log(Fahrenhiet);

//write a program that use filter to remove all negative number
let mixArray: number[] = [2,-3,4,-5,6,-7]
let positiveArray = mixArray.filter((number )=>{
if (number>=0) {
    return number
}
}
)
console.log(positiveArray);
//Write a program that use filter "APPLE","banana","cherry","DATE","grapes"
// create new method array containg only the fruits with more than five character
let fruits:string[]= ["apple","banana","cherry","date","grapes"]
let fruitsaboveFiveCharacter=fruits.filter((number)=>{
    if (number.length >5) {
        return number
    }
}
)
console.log(fruitsaboveFiveCharacter);

//Given an array of number [1,2,3,4,5,6,7,8,9,10]use the map and filter 
//methods together to create a new array containg the squares of even nymber

let array = [1,2,3,4,5,6,7,8,9,10];
let evenArray=array .map((number) => number**2).filter((number) =>{
if (number % 2==0) {
    return number
}
})

console.log(evenArray);
// Given an array of number [3,6,9,12,15,18] use the map and filter methods
// together to create a new aray containg the double values of odd number
let oddArray = [3,6,0,12,15,18]
let doubleArray= oddArray. filter ((elements) => elements % 2 !==0).map ((elements) => elements * 2,{

})


console.log(doubleArray);
//Given an arrays of names ["Alice","Bob"],"charlie","Devid","Emily"]
//use the foreach to log each name with an eclamation
let names= ["Alice","Bob","Charlie","Devid","Emily"];
names.forEach(function(a){
console.log(a + "!");

})

