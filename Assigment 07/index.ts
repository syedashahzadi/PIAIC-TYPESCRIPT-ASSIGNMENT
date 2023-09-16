//Q#1
//Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var userName:string = "hello";
var Message:String = "Now i want to learn advanced typrscript";
console.log(userName,Message);
//Q#2
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var _Name:string = "rida zainab"
console.log(_Name.toUpperCase());
console.log(_Name.toLowerCase());
console.log(_Name.toString());


//Q#3
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
var Quote:string = "Anyone who has ever made anything importance was DISCIPLINCED"
var authorName:string = "Andrew Hendrixson"
console.log("Andrew Hendrixson said ",Quote,);
//Q#4
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
var famousPerson:string = "Eleanor Roosevelt";
var famousQuote:string = "The future belong to those who believe in the beauty of their Dream";
var message : string = "famousPerson, famousQuote";
console.log(famousPerson,message);
//Q#5 
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white space//Stripping Names: Store a person’s name, and include some whitespace
// characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
var myName:string = "\t         rida zainab     \n";
console.log(myName);
var strippingName:string = myName.trim();
//console.log(myName.trim());
console.log("stripping name",strippingName);

//Q#6
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
var sum:number = 5+3;
console.log(sum);
var subsraction:number = 10 -2;
console.log(subsraction);
var multiplication:number = 4*2;
console.log(multiplication);
var division:number = 16/2;
console.log(division);
//Q#7 You should create four lines that look like this:
//_____________________________________________
//console.log(5 + 3)
//_____________________________________________
//Your output should simply be four lines with the number 8 appearing once on each line.
var line1:any = "___________________________";
var line2:any = "___________________________";
var line3:any = "___________________________";
var line4:any = "___________________________";
console.log(5+3);
console.log(line1,5+3);
console.log(line2,5+3);
console.log(line3,5+3);
console.log(line4,5+3);

//Q#8
//Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.
//var favoriteNumber: number = 5
//favoriteNumber "My name is rida";
//console.log(favoriteNumber);

//Q#9
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

var num1:number = 20;
var num2:number= 2;
var result= num1 / num2;
// Divide 20/2
console.log(result);
var simpleProgram = "coding";
//Rida Zainab 05.09.2023
console.log(simpleProgram);
//Q#10
//Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friendsName = ["iqra","rida","ishmal","sidra"]
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
//Q#11
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same,
//console.log([0],"have a great day");
for (let index = 0; index < friendsName.length; index++) {
    console.log(friendsName[index],"have a great day");
    
    
}

//Q#12Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”    
let favoriteTrans: string[] =["car","honda","train"]
console.log(`i would like to own",${favoriteTrans[0]}`)
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let inviting:string[] = ["hurain","rutba","rania"]
for (let index = 0; index < inviting.length; index++) {

    console.log("have a dinner at my place",inviting [index] );    
}
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// rutba can't make dinner also add iqra  in place of rutba
//let add = inviting.splice(1,1 ,"Iqra")
console.log(inviting[1]," can't make dinner");
console.log(inviting);
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
//console.log(inviting[1]," can't make dinner");
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(inviting);
//Print a second set of invitation messages, one for each person who is still in your list.
let invitingMessage:string[]= ["hurain","iqra","rania"]
console.log("you will come",invitingMessage[2] );
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner. 
let add= invitingMessage. push("rida","aliza","jia",)
console.log(invitingMessage);
16 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var visitPlace = ["Makha","Madina","Najaf","Karbala","Sham"]
 // • Print your array in its original order.
console.log(visitPlace);
// • Print your array in alphabetical order without modifying the actual list.
var alphabeticalArray = [...visitPlace].sort();
console.log(alphabeticalArray);
// • Show that your array is still in its original order by printing it.
console.log( visitPlace);
// • Reverse the order of your list. Print the array to show that its order has changed.
var reverseArray = [...visitPlace].reverse();
console.log(reverseArray);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(visitPlace);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(visitPlace.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(visitPlace.reverse());
// Q .17 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.
console.log("Guest invited in 1st Array",guest.length);
//Q .18 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
// cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languagesList:string[]=["Urdu","English","Araabic","Hindi","Chaines","japnies"];
for (let index = 0; index < languagesList.length; index++) {
    
    console.log(languagesList[index])};
    //Q . 19 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let country = {
name:"pakistan",
area: 796096,
cities:200,
Capital: "Islamabad",
}
let country2 = {
  name: "england",
  Area: 986750,
  cities: 76,
  capital: "London",
}
console.log(country,country2);

//Q .20 Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.

//Q .21 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and
// assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned
// 5 points.
*/
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no
//   output.)
let alien_color = ["red","Green","yellow"];
if (alien_color.includes("Green")) {
  console.log("you just earned 5 Points");
  
}
let result = ["pass","fail"];
if (result.includes("pass")) {
  console.log("test pass");
  if (!result.includes("fail")) {
    console.log("test fail");
    
  }
}
//Q .22 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block

if (alien_color.includes("Green")) {
  console.log("player just earned 5 points for shooting the alien");
  
  }
   
    else{
console.log("Player just earn 10 points");

  }
//Q . 23 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

///• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien. 

if (alien_color.includes("Green")) {
  console.log("player earned 5 points");
}
if (alien_color.includes("yellow")) {
  console.log("player earned 10 points");
}
if (alien_color.includes("red")) {
  console.log("player earned 15 points");
  
}
//Q. 24 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
// and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

///• If the person is age 65 or older, print a message that the person is an elder.
var age = 14;
if (age>=0 && age <2) {
  console.log("baby");
}
else if (age >=2 && age<4) {
console.log("toddler");  
}
else if (age >=4 && age<13 ) {
  console.log("kid");
}
else if (age >= 13 && age<20) {
console.log("teenager");  
}
else if (age >= 20 && age < 65) {
  console.log("adult");
}
else{
  console.log("person is an elder");
  
}
//Q .25 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
//check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits:string []= ["PineApple", "Mango","Orange","Apple","Banana"];
if (favoriteFruits.includes("PineApple")) { 
  console.log("your Favorite Fruit is PineApple  ",);
}


if (favoriteFruits.includes("Mango")) {
  console.log("your Favorite Fruit is Mango ");
}
if (favoriteFruits.includes("Ornge") ){
  console.log("your Favorite Fruit is Orange ");
}
if (favoriteFruits.includes("Apple")) {
  console.log("Your Favorit Fruit is Apple"); 
}
if (favoriteFruits.includes("Banana")) {
 console.log("You really like bananas!");
  
}
//Q . 26 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code 
//that will print a greeting to each user after they log in to a website. Loop through the array,
//and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames = ["Admin","Adeel","Bilal","Abu Huraira","Naveed"]
if (userNames.includes("Admin")) {
  console.log('Hello admin, would you like to see a status report?'); 
}
else
{
  console.log("Hello Eric, thank you for logging in again");
  
}

